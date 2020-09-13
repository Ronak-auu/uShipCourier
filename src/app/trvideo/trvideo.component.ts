import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-trvideo',
  templateUrl: './trvideo.component.html',
  styleUrls: ['./trvideo.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class TrvideoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
