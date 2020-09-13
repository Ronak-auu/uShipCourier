import { Component, OnInit } from '@angular/core';
import { Del } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(private apiservice: Del,private router:Router) { }
  /* customer: [];
  result: [];*/
  result : [];
  trans= true;
  cus = false;
  email : string;
  public transformer(){
   this.trans = true;
   this.cus = false;   
  }
  public customer(){
    this.trans = false;
   this.cus = true;
  }
   ngOnInit() {
    localStorage.removeItem("key");
    if(!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }

    var token =localStorage.getItem("token");
    this.apiservice.order(token);
    this.result = JSON.parse(localStorage.getItem("order"));
    this.email = localStorage.getItem("id");
    //console.log(Object.keys(this.result));
    /* var c=0;
    var t=0;*/
    /* for(var i=0;i<Object.keys(this.result.result).length;i++){
      //console.log(this.result.result[i].Customer_id);
      if(this.result.result[i].Customer_id == this.email){
        this.customer = this.result.result[i];
        this.cus = true;
        //console.log(this.customer);
      }
      else{
        this.trans = true;
      } 
    } */
    this.router.navigate(['/Order']);
/*     console.log(this.result);
    console.log(this.customer);
    console.log(this.transformer); */
  }
  Removetrans(Parcel_id){
    var r = confirm("do you want to remove it "+ Parcel_id.Customer_id); 
    if (r == true) {
      var token = localStorage.getItem("token");
      this.apiservice.tokentrans = token;
      this.apiservice.removetrans(Parcel_id);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/Order']);
    }
  }
  Removecus(Parcel_id){
    var r = confirm("do you want to remove it "+ Parcel_id.item); 
    if (r == true) {
      var token = localStorage.getItem("token");
      this.apiservice.tokentrans = token;
      this.apiservice.removecus(Parcel_id);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/Order']);
    } 
  }
  changecus(Parcel_id){
    var r1,r2;
    if(Parcel_id.Transformer_id == "")
        r1 = confirm("there is no transformer so your request will be remove"); 
    else
        r2 = confirm("it will remove transformer  "+ Parcel_id.Transformer_id+" from your request");
    if (r1 == true) {
      var token = localStorage.getItem("token");
      this.apiservice.tokentrans = token;
      this.apiservice.removecus(Parcel_id);
      this.router.navigate(['/home']);
    }
    if (r2 == true) {
      var token = localStorage.getItem("token");
      this.apiservice.tokentrans = token;
      this.apiservice.changecus(Parcel_id);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/Order']);
    }
  }
}