import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../service/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
})
export class InfoBookComponent {
  id:any;
  data:any = {};
  tab: any[] = [];
  carts:any[] = [];
  size:number=0;
constructor(private route:ActivatedRoute , private service:BookService){
this.id= this.route.snapshot.paramMap.get("id");
console.log(this.id);
}
ngOnInit(): void {
  this.getonebook();

}
getonebook(){
  this.service.getallinfobook(this.id).subscribe((res:any) =>{  
    this.data = res;
    console.log(this.data.categorie);
    this.getcategories(this.data.categorie);
    }, error=>{console.log(error.message)});
 
}
getcategories(c:any){
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

