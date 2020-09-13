import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor(private http: HttpClient, private router: Router) { }

  registerTrasformer(user){
    //console.log(user);
    this.http.post('http://localhost:3000/trRegister',user).subscribe(res => {
      console.log(res);
      if(res && res.result)
      {
        //console.log("Sucessfully Registered use same email for Login.");
        alert("Sucessfully Registered use same email for Login.");
        this.router.navigate(['/login']);
      }
      else{
        //console.log("Sucessfully Registered use same email for Login.");
     
        alert("User already register, plz use another Email.");
      }
    });
  }

  registerCustomer(user){
    //console.log(user);
    this.http.post('http://localhost:3000/cuRegister',user).subscribe(res => {
      console.log(res);
      if(res && res.result)
      {
        //console.log("Sucessfully Registered use same email for Login.");
        alert("Sucessfully Registered use same email for Login.");
        this.router.navigate(['/login']);
      }
      else{
        //console.log("Sucessfully Registered use same email for Login.");
     
        alert("User already register, plz use another Email.");
      }
    });
  }
}
