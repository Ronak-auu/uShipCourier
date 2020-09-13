import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Binding } from './models/Biding';
import { Finddelivery } from './models/finddelivery';
import { ReturnStatement } from '@angular/compiler';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class Del {
  constructor(private http:HttpClient) { }
  public data:any;
  public result: any;
  public tokencus:any;
  public tokentrans:any;
  public tokenfind:any;
  public tokenorder:any;
  onSubmit(Biding:Binding){
    Biding.item = this.data;
    Biding.tokencus = this.tokencus;
    //console.log(this.token);
    this.http.post('http://localhost:3000/BidingList',{Biding}).subscribe(res => {
        //console.log(res);
    })
  }
  finddelivery(finddelivery:Finddelivery){
      finddelivery.tokenfind = this.tokenfind;
        this.http.post('http://localhost:3000/FindOrder',{finddelivery}).subscribe(res => {
         // console.log(res.result);
        localStorage.setItem("key",JSON.stringify(res));
        })
  }
  confirm(Biding:Binding){
    Biding.tokentrans = this.tokentrans;
    console.log(Biding);
    this.http.post('http://localhost:3000/confirm',{Biding}).subscribe(res => {
       console.log(res);
     })
  }

  removetrans(Biding:Binding){
    Biding.tokentrans = this.tokentrans;
    console.log(Biding);
    this.http.post('http://localhost:3000/removetrans',{Biding}).subscribe(res => {
       //console.log(res);
     })
  }
  removecus(Biding:Binding){
    Biding.tokentrans = this.tokentrans;
    console.log(Biding);
    this.http.post('http://localhost:3000/removecus',{Biding}).subscribe(res => {
       //console.log(res);
     })
  }
  changecus(Biding:Binding){
    Biding.tokentrans = this.tokentrans;
    console.log(Biding);
    this.http.post('http://localhost:3000/removetrans',{Biding}).subscribe(res => {
       //console.log(res);
     })
  }

  public profile(token:string){
    this.http.post('http://localhost:3000/profile',{token}).subscribe(res => {
      //var result = localStorage.setItem("profile",JSON.stringify(res));
//      var result =res;
      var result = localStorage.setItem("profile",JSON.stringify(res));
    })
  }

  order(token:string){
    this.http.post('http://localhost:3000/order',{token}).subscribe(res => {
      var result = localStorage.setItem("order",JSON.stringify(res));
    })
  } 
}