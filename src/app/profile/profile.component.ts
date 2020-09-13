import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Del } from '../api.service';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
Profile = true;
Add = false;
result : [];
edit1 = true;
cancel1 = false;
save1 = false;
edit2 = true;
cancel2 = false;
save2 = false;
edit3 = true;
cancel3 = false;
save3 = false;
edit4 = true;
cancel4 = false;
save4 = false;
email :string;

constructor(private apiservice: Del,private router:Router) { }
ngOnInit() {
  if(!localStorage.getItem("token")) {
    this.router.navigate(['/login']);
  }
/*   $("#menu").click(function(){
    if($(".dropdown-content").css("display")=="none")
      $(".dropdown-content").css("display","block");
    else
      $(".dropdown-content").css("display","none");
  }); */
    var token = localStorage.getItem("token");
    this.apiservice.profile(token);
    this.result = JSON.parse(localStorage.getItem("profile"));
    this.router.navigate(['/Profile']);
}
onProfile(){
this.Profile = true;
this.Add = false;
}
onAddress(){
  this.Add = true;
  this.Profile = false;
}
onEdit1(){
  this.edit1 = false;
  this.cancel1 = true;
  this.save1 = true;
}
onCancel1(){
  this.edit1 = true;
  this.cancel1 = false;
  this.save1 = false;
}
onSave1(){
  this.save1 = false;
  this.cancel1 = false;
  this.edit1 = true;
}
onEdit2(){
  this.edit2 = false;
  this.cancel2 = true;
  this.save2 = true;
}
onCancel2(){
  this.edit2 = true;
  this.cancel2 = false;
  this.save2 = false;
}
onSave2(){
  this.save2 = false;
  this.cancel2 = false;
  this.edit2 = true;
}
onEdit3(){
  this.edit3 = false;
  this.cancel3 = true;
  this.save3 = true;
}
onCancel3(){
  this.edit3 = true;
  this.cancel3 = false;
  this.save3 = false;
}
onSave3(){
  this.save3 = false;
  this.cancel3 = false;
  this.edit3 = true;
}
onEdit4(){
  this.edit4 = false;
  this.cancel4 = true;
  this.save4 = true;
}
onCancel4(){
  this.edit4 = true;
  this.cancel4 = false;
  this.save4 = false;
}
onSave4(){
  this.save4 = false;
  this.cancel4 = false;
  this.edit4 = true;
}
}
