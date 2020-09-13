import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cuvideo',
  templateUrl: './cuvideo.component.html',
  styleUrls: ['./cuvideo.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class CuvideoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
