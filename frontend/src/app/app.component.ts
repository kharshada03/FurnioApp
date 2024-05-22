import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    SigninComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'furniroApp';
}
