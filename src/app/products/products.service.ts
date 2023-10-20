import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = "http://localhost:3001/api";

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/articles/')
    }
    
    create(product:Products): Observable<any> {
    
    return this.httpClient.post(this.apiURL + '/articles/',product)
    }
    
    find(_id:object): Observable<any> {
    
    return this.httpClient.get(this.apiURL + '/articles/' + _id)
    }
    
    update(_id:object, product:Products): Observable<any> {
    
    return this.httpClient.put(this.apiURL + '/articles/' + _id, product)
    }
    
    delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/articles/' + _id)
    }
}
