import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from 'src/models/app.restresponse.model';

@Injectable({providedIn: 'root'})
export class RestClientService {
  // HttpClient: The Instance that MUST be resolved
  // using the HttpClientModule
  constructor(private httpClient: HttpClient) { }

  get():Observable<ProductResponse[]>{
     const resp = this.httpClient.get<ProductResponse[]>("https://localhost:7273/api/Products");
     return resp;
  }



  post(prd:ProductResponse):Observable<ProductResponse[]>{
    const resp = this.httpClient.post<ProductResponse[]>("https://localhost:7273/api/Products",prd, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return resp;
 }


}
