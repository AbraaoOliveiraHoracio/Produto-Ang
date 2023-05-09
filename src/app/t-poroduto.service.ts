import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TPD } from './TPD';

@Injectable({
  providedIn: 'root'
})
export class TPorodutoService {

  constructor(private http: HttpClient){}

getTPD(): Observable<TPD[]>{
  let url = "http://localhost:3000/produto";
  return this.http.get<TPD[]>(url);

}

}
