import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookComponent } from './book/componets/all-book/all-book.component';
import { InfoBookComponent } from './book/componets/info-book/info-book.component';
import { CartsComponent } from './carts/component/carts/carts.component';
import { AboutComponent } from './about/component/about/about.component';

const routes: Routes = [
  {path:"book", component:AllBookComponent},
  {path:"info/:id", component:InfoBookComponent},
  {path:"carts", component:CartsComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:AllBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
