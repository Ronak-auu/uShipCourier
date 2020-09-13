import { Component, OnInit } from '@angular/core';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  trans=false;
  cus=false;
  buss=false;
  constructor(private joinService: JoinService) { }

  ngOnInit() {
    
  }

 
  public onCustomer()
  {
      this.cus=true;
      this.trans=false;
  }

  public onTransformer():void
  {
      this.trans=true;
      this.cus=false;
  }

  public onBussiness()
  {
    this.buss=true;
  }

  public onPersonal()
  {
    this.buss=false;
  }
  
  
  registerTrasformer(trData){
    this.joinService.registerTrasformer(trData);
  }
 registerCustomer(cuData){
  this.joinService.registerCustomer(cuData);
  } 
}
