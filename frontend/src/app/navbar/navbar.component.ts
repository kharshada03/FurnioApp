import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userEmail:any;
  // userEmail = localStorage.getItem('email');
  constructor(){}
  ngOnInit(): void {
    if(typeof localStorage !=='undefined'){
    this.userEmail = localStorage.getItem('email');
    }
  }
  
}
