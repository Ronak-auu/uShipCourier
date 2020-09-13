import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Del} from '../api.service';
@Component({
  selector: 'app-newdel',
  templateUrl: './newdel.component.html',
  styleUrls: ['./newdel.component.css']
})
export class NewdelComponent implements OnInit {

  constructor(private apiservice: Del,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
  }

  item(item:string){
    var token = localStorage.getItem("token");
    //console.log(token);
    this.apiservice.data = item;
    this.apiservice.tokencus =  token;
    this.router.navigate(['/del']);
  }

}
