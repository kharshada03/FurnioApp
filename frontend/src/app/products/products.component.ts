import { CommonModule } from '@angular/common';
import { RouterOutlet,Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  ProductsArray : any[] = [];
  name: String ="";
  price: String ="";
  image:String = "";
  pid:any="";

  constructor(private http:HttpClient,private router: Router){
    
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/product/get").subscribe((resultData : any)=>
      {
        console.log(resultData);
        this.ProductsArray = resultData.data;
        console.log(this.ProductsArray)
        // alert("User Register Successfully");
      });
  }

  // addToCart(){
  //   this.router.navigateByUrl('/viewDetails/'+this.pid);
  // }

}                         
