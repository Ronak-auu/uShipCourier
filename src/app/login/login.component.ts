import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
flag:number;
  ngOnInit() {
  }

  loginUser(email,password){
    //var email = user.email;
    //var password = user.password;
    console.log(email);
    
    localStorage.setItem("id",email);

    this.flag =this.loginService.loginuser(email, password);
    
    if(this.flag==1){
      
    }
    //console.log(this.flag);
  }
}
