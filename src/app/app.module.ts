import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrvideoComponent } from './trvideo/trvideo.component';
import { CuvideoComponent } from './cuvideo/cuvideo.component';
import { NewdelComponent } from './newdel/newdel.component';
import { DelComponent } from './del/del.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Del } from './api.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule } from '@angular/material';

import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinddeliveryComponent } from './finddelivery/finddelivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempFormComponent } from './temp-form/temp-form.component';

import { HttpClientModule } from '@angular/common/http';
import { JoinService } from './join.service';
import { OrderComponent } from './order/order.component';
import { HelpComponent } from './help/help.component';
const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatBadgeModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrvideoComponent,
    CuvideoComponent,
    NewdelComponent,
    DelComponent,
    JoinComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    TempFormComponent,
    FinddeliveryComponent,
    OrderComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material
  ],
  exports:[
    material,
  ],  
  providers: [JoinService,Del],
  bootstrap: [AppComponent]
})
export class AppModule { }