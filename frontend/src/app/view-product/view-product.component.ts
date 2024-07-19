import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [RouterLink,CommonModule,ProductsComponent,FormsModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {

  pid:any;
  productDetail:any;
  qty:string="";
  colorStyle:String="";
  colorSelect:string="";

  constructor(private route: ActivatedRoute,private http:HttpClient) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pid = params['pid']; // Access the 'id' parameter from the URL
      // console.log('ID:', this.pid);
      this.getProductDetailById(this.pid)
    });
  }

  getProductDetailById(pid:number){
    this.http.get("http://localhost:3000/product/view/"+pid).subscribe((resultData : any)=>
      {
        // console.log(resultData);
        this.productDetail = resultData.data;
        // console.log(this.productDetail);
      });
  }

  addToCart(pid:number){
    this.http.get("http://localhost:3000/product/view/"+pid).subscribe((resultData : any)=>
      {
        // console.log(resultData);
         this.productDetail = resultData.data;
        //  console.log(productDetail);
      });
      for (let index = 0; index < this.productDetail.length; index++) {
        const element = this.productDetail[index];
        var body = {
          'pid':pid,
          'name':element.name,
          'price':element.price,
          'img':element.image,
          'quantity':this.qty,
          "colorStyle":this.colorSelect,
          "email":localStorage.getItem('email')
        };
        this.http.post("http://localhost:3000/product/addCart/'"+pid,body).subscribe((resultData : any)=>
          {
            console.log(resultData);
            alert("Added to Cart");
          });
        
      }
  }

  onColorSelect(value:any){
    this.colorSelect= value;
  }

  buy(pid:number){
    this.http.get("http://localhost:3000/product/view/"+pid).subscribe((resultData : any)=>
      {
        // console.log(resultData);
         this.productDetail = resultData.data;
        //  console.log(productDetail);
      });
      for (let index = 0; index < this.productDetail.length; index++) {
        const element = this.productDetail[index];
        var body = {
          'pid':pid,
          'name':element.name,
          'price':element.price,
          'quantity':this.qty,
          "colorStyle":this.colorSelect,
          "email":localStorage.getItem('email')
        };
        this.http.post("http://localhost:3000/product/buy/'"+pid,body).subscribe((resultData : any)=>
          {
            console.log(resultData);
            alert("Order Placed Successfully..!!");
          });
        
      }
  }
}
