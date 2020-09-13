import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { this.flag = 0; }

  public flag:any ;
  public token:any;

  loginuser(email:string,password:string){
    console.log(email);
    this.http.post('http://localhost:3000/login',{email,password}).subscribe(res => {
      console.log(res);
      if(res && res.token)
      {
        this.token=res.token;
        localStorage.setItem('token',this.token);
        //alert(localStorage.getItem('token'));
        this.router.navigate(['/home']);
      }
      else
      {alert("Email Or Password is Wrong");}
      
    });

    return this.flag;
  }
}
