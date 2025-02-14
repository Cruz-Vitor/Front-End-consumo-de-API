import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }
  getProdutos(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/produtos")
  }
}
