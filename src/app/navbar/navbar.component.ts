import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = false;
  login = true;
  FreeQuotes = false;
  Finddelivery =false;
  email:string;
  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("token")) {
      this.username = true;
      this.login = false;
      this.FreeQuotes = true;
      this.Finddelivery = true;
      this.email = localStorage.getItem("id");
    }
    else {
      this.username = false;
      this.login = true;
    }
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
