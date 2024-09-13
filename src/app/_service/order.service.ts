import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTHORIZATION_NAME, AUTHORIZATION_PASSWORD, HOST } from '../_shared/constants';
import { Order } from '../_model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = HOST;

  constructor(private http: HttpClient) { }


  createOrder(order: Order) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.post<Order>(`${this.url}/orders`, Order, {headers});
  }


  listById(orderId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Order>(`${this.url}/orders/${orderId}`, {headers});
  }


  listPageable(page: number, size: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));    
    return this.http.get<Order[]>(`${this.url}/orders?page=${page}&size=${size}`, {headers});
  }
  

  listDetails(orderId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));    
    return this.http.get<Order[]>(`${this.url}/order_details/${orderId}`, {headers});
  }
}
