import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient,private form:FormBuilder) {

  }

  login(){
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      "email":this.email,
      "password":this.password,
    };

    this.http.post("http://localhost:3000/user/login",bodyData).subscribe((resultData : any)=>
      {
        console.log(resultData);
        alert("Login Successfully");

        if (resultData.status) 
          {
        
             this.router.navigateByUrl('/products');
             localStorage.setItem('email',this.email);
      
          } 
          else
           {
            alert("Incorrect Email or Password");
            console.log("Errror login");
          }
      });
  }
}
