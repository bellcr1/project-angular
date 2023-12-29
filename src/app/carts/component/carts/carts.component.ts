import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  standalone: true,
  styleUrls: ['./carts.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CartsComponent implements OnInit {
  constructor(){}
  carts:any[]=[];
  total:number=0;;
  ngOnInit(): void {
      this.getbooks()
      this.totalcarts()
  }
  getbooks(){
    if("carts" in localStorage){
    this.carts = JSON.parse(localStorage.getItem("carts")!);}
  console.log(this.carts)}

  totalcarts(){
    this.total=0;
    for (let x in this.carts) {
      this.total+= this.carts[x].item.prix* this.carts[x].quantity
      
    }

  }
}
