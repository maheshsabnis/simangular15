import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInfo } from 'src/models/app.productinfo.model';

@Injectable({providedIn: 'root'})
export class ProductInfoService {
  private url:string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://localhost:7279/api/ProductsAPI';
  }

  getProducts():Observable<ProductInfo[]> {
    const resp = this.httpClient.get<ProductInfo[]>(this.url);
    return resp;
  }
  getProductById(id:number):Observable<ProductInfo> {
    const resp = this.httpClient.get<ProductInfo>(`${this.url}/${id}`);
    return resp;
  }
  postProduct(prd:ProductInfo):Observable<ProductInfo> {
    const resp = this.httpClient.post<ProductInfo>(this.url,prd,{
      headers: {
        'Content-Type':'application/json'
      }
    });
    return resp;
  }
  putProduct(id:number,prd:ProductInfo):Observable<ProductInfo> {
    const resp = this.httpClient.put<ProductInfo>(`${this.url}/${id}`,prd,{
      headers: {
        'Content-Type':'application/json'
      }
    });
    return resp;
  }

  deleteProduct(id:number):Observable<ProductInfo> {
    const resp = this.httpClient.delete<ProductInfo>(`${this.url}/${id}`);
    return resp;
  }

}
