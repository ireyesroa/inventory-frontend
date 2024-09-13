import { Injectable } from '@angular/core';
import { AUTHORIZATION_NAME, AUTHORIZATION_PASSWORD, HOST } from '../_shared/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = HOST;

  constructor(private http: HttpClient) { }


  listById(categoryId: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Category>(`${this.url}/categories/${categoryId}`, {headers});
  }

  listPageable(page: number, size: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(AUTHORIZATION_NAME +':' + AUTHORIZATION_PASSWORD));
    return this.http.get<Category[]>(`${this.url}/categories?page=${page}&size=${size}`, {headers});
  }
}
