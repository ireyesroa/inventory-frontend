import { Injectable } from '@angular/core';
import { AUTHORIZATION_NAME, AUTHORIZATION_PASSWORD, HOST } from '../_shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = HOST;

  constructor(private http: HttpClient) { }


  createProduct(product: Product) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.post<Product>(`${this.url}/product`, product);
  }


  listById(productId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Product>(`${this.url}/products/${productId}`);
  }


  listPageable(page: number, size: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    
    return this.http.get<Product[]>(`${this.url}/products?page=${page}&size=${size}`, {headers});
  }
}
