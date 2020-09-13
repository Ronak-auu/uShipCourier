import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Del } from '../api.service';

@Component({
  selector: 'app-finddelivery',
  templateUrl: './finddelivery.component.html',
  styleUrls: ['./finddelivery.component.css']
})
export class FinddeliveryComponent implements OnInit {
th= false;
result = [];
  constructor(private apiservice: Del,private router:Router) { }
  ngOnInit() {
    localStorage.removeItem("key");
    if(!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
  }
  finddelivery(finddeliveryData){
    var token = localStorage.getItem("token");
    this.apiservice.tokenfind = token;
    this.apiservice.finddelivery(finddeliveryData);
    this.th = true;
    this.result = JSON.parse(localStorage.getItem("key"));
    console.log(this.result);
    /* for (var i = 0; i < result.length; i++) {
      console.log(result[i].item);
    } */
  }
  confirm(Parcel_id){
    var token = localStorage.getItem("token");
    this.apiservice.tokentrans = token;
    this.apiservice.confirm(Parcel_id);
    this.router.navigate(['/home']);
    alert("your request has accpeted, you can check in your order and we will send you email");
  }
}