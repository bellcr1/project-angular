import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './component/carts/carts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    NgModule
  ]
})
export class CartsModule { }
