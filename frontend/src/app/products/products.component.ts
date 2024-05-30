import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private http:HttpClient){

  }
  
  ngOnInit(): void {
    this.http.get("http://localhost:3000/product/get").subscribe((resultData : any)=>
      {
        console.log(resultData);
        // alert("User Register Successfully");
      });
  }

}                         
