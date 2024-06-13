import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent{

  firstName:String = "";
  lastName:String = "";
  email:String = "";
  mobileNo:String = "";
  address1:String = "";
  address2:String = "";
  password:String = "";
  state:string = "";
  pincode:string = "";

  constructor(private http:HttpClient,private form:FormBuilder){

  }

  ngOnInit(): void {   
    
  }

  register(){
    let bodyData = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "mobileNo" : this.mobileNo,
      "address1" : this.address1,
      "address2" : this.address2,
      "state" : this.state,
      "pincode" : this.pincode,
      "password" : this.password,
    };
    let headers: HttpHeaders = new HttpHeaders();

    // headers = headers

    //   .set('Content-Type', 'application/json')
    //   .set('X-Authorization-Key', 'blablabla')
    //   .set('Access-Control-Allow-Origin','always')

    // console.log(bodyData);
    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData : any)=>
    {
      console.log(resultData);
      alert("User Register Successfully");
    });
  }

  save(){
    this.register();
  }

}
