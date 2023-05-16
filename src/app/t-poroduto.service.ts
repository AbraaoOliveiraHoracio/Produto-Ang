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
save(produto:TPD): Observable<TPD>{
  return this.http.post<TPD>(this.url, produto);

}
delete(produto: TPD): Observable<void>{
  return this.http.delete<void>(`${this.url}/${produto.id}`);

}
update(produto: TPD): Observable<TPD>{
  return this.http.put<TPD>(`${this.url}/${produto.id}`, produto);
}

}
