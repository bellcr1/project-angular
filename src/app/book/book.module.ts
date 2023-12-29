import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBookComponent } from './componets/all-book/all-book.component';
import { InfoBookComponent } from './componets/info-book/info-book.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OnebookComponent } from './componets/onebook/onebook.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AllBookComponent,
    InfoBookComponent,
    OnebookComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgModule,
    RouterModule
    
    
  ]
})
export class BookModule { }
