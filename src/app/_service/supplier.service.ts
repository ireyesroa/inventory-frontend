import { Injectable } from '@angular/core';
import { AUTHORIZATION_NAME, AUTHORIZATION_PASSWORD, HOST } from '../_shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../_model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url: string = HOST;

  constructor(private http: HttpClient) {
    
  }

  listById(supplierId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Supplier>(`${this.url}/categories/${supplierId}`, {headers});
  }

  listPageable(page: number, size: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Supplier[]>(`${this.url}/categories?page=${page}&size=${size}`, {headers});
  }

}
