import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TPD } from './TPD';

@Injectable({
  providedIn: 'root'
})
export class TPorodutoService {
url = "http://localhost:3000/produto";
  constructor(private http: HttpClient){}

getTPD(): Observable<TPD[]>{

  return this.http.get<TPD[]>(this.url);

}

}
