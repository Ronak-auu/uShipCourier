import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Del} from '../api.service';
@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {
  row1=false;
  row2=false;
  row3=false;
  constructor(private apiservice: Del,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
/*     var string = 'Hello World!';
    var encodedString = btoa(string);
    console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh" 
    var decodedString = atob(encodedString);
    console.log(decodedString);
 */  }
  onBlur() {
    this.row1=true;
    this.row2=true;
    this.row3=true;
  }
  onSubmit(delData){
    //alert("your request has accpeted");
    //console.log(delData.token);
    this.apiservice.onSubmit(delData);
    this.router.navigate(['/home']);
  }
}