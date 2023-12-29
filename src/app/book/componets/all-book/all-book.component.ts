import { Component,OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-all-book',
    templateUrl: './all-book.component.html',
    standalone: true,
    styleUrls: ['./all-book.component.scss'],
    imports: [CommonModule, FormsModule,RouterModule],
    
})
export class AllBookComponent implements OnInit  {
  tab: any[] = [];
  cat: any[] = [];
  carts:any[] = [];
  test:boolean = false;
  size:number=0;

  constructor(private service:BookService){};
 ngOnInit(): void {
   this.getbo();
   this.getbcatg();
   
 }
 getbo(){
  this.service.getallbook().subscribe((res:any) =>{  
    this.tab = res;
    console.log(this.tab);
    }, error=>{console.log(error.message)});
 }
 getbcatg(){
  this.service.getallcatego().subscribe((res:any) =>{  
    this.cat = res;
    console.log(this.cat);
    }, error=>{console.log(error.message)});
 }

 filtercategories(catg:any){
  console.log(catg);
  let c = catg.target.value;
  this.getcategories(c);}

 getcategories(c:string){
  console.log(c);
  this.service.getcatego(c).subscribe((res:any) =>{  
  this.tab = res;
  console.log(this.tab);
  }, error=>{console.log(error.message)});
 }
 addcarts(b:any){
    if("carts" in localStorage){
    this.carts = JSON.parse(localStorage.getItem("carts")!);
    let exist =this.carts.find(item => item.id == b.id);
    if (exist) { alert("mawjod sayay")
    
    }else{
      
      this.carts.push({item:b,quantity:this.size});
      localStorage.setItem("carts",JSON.stringify(this.carts))
    }
 } else{
    this.carts.push({item:b,quantity:this.size});
    localStorage.setItem("carts",JSON.stringify(this.carts))
    
  }
 }

}
