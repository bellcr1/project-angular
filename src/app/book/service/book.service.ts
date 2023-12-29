import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  getallbook(){
   return this.http.get('http://localhost:3000/BOOKS')
  }
  getallcatego(){
    return this.http.get('http://localhost:3000/categories')
   }
   getcatego(key:any){
    return this.http.get('http://localhost:3000/'+key)
   }
   getallinfobook(id:any){
    return this.http.get('http://localhost:3000/BOOKS/'+id)
   }
}
