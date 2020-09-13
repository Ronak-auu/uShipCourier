import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuvideoComponent } from './cuvideo/cuvideo.component';
import { HomeComponent } from './home/home.component';
import { TrvideoComponent } from './trvideo/trvideo.component';
import { NewdelComponent } from './newdel/newdel.component';
import { DelComponent } from './del/del.component';
import { ProfileComponent } from './profile/profile.component';
import { FinddeliveryComponent } from './finddelivery/finddelivery.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path:'cuvideo',component:CuvideoComponent},
  {path:'trvideo',component:TrvideoComponent},
  {path:'newdel',component:NewdelComponent},
  {path:'home',component:HomeComponent},
  {path:'join',component:JoinComponent},
  {path:'login',component:LoginComponent},
  {path:'del',component:DelComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'Finddelivery',component:FinddeliveryComponent},
  {path:'Order',component:OrderComponent},
  {path:'help',component:HelpComponent},

  {path:'',
   redirectTo:'/home',
   pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[CuvideoComponent,TrvideoComponent,NewdelComponent]