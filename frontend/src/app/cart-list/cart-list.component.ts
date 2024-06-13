import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {

  ProductsArray : any[] = [];

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
        console.log(this.ProductsArray)
        // alert("User Register Successfully");
      });
    }
  }
}
