import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_API = "http://localhost:8080/api/product/";
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.BASE_API + 'all');
  }

  getAllProductCategory(){
    return this.http.get(this.BASE_API + 'categorylist');
  }

  getAllProductSubCategory(){
    return this.http.get(this.BASE_API + 'subcategorylist');
  }
}
