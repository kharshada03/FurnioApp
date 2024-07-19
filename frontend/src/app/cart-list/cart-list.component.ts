import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { count } from 'node:console';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {

  ProductsArray : any[] = [];
  total:any=0;
  count:any=0;
  productTotal:any=0;

  constructor(private http:HttpClient,private router: Router){
    
  }
  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts(){
    if(typeof localStorage !=='undefined'){
    var body = {
      "email":localStorage.getItem('email')
    };
    this.http.post("http://localhost:3000/product/viewCart",body).subscribe((resultData : any)=>
      {
        // console.log(resultData);
        this.ProductsArray = resultData.data;
        console.log(this.ProductsArray);
        for(let j=0;j<=this.ProductsArray.length;j++){   
          this.productTotal = this.ProductsArray[j].price * this.ProductsArray[j].quantity;
          this.total+= this.productTotal;
          console.log("prod "+this.productTotal);  
     } 
        // alert("User Register Successfully");
      });
    }
  }

  removeCart(pid:number){
    var body = {
      "pid":pid
    };
    this.http.post("http://localhost:3000/product/removeFromCart",body).subscribe((resultData : any)=>
      {
        console.log(resultData);        
        alert("Item Remove from Cart");
        this.router.navigateByUrl('/cart');
      });
  }
}
