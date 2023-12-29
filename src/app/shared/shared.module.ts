import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinComponent } from './component/spin/spin.component';



@NgModule({
  declarations: [
    NavComponent,
    SpinComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [NavComponent,SpinComponent]
})
export class SharedModule { }
