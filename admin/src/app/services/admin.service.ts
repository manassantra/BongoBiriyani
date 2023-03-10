import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_API = "http://localhost:8080/api/";
  authDetails: any = {};
  authHeader: any;
  admId: any;
  constructor(private http: HttpClient) {
    this.authDetails = JSON.parse(localStorage.getItem('bong-ADMAuth') || '{}');
    this.admId = this.authDetails.admId;
    console.log("Adm Id = " + this.admId)
    const token = this.authDetails.admAuthToken;
    console.log("Token - " + token);
    this.authHeader = new Headers();
    this.authHeader.append('Accept', 'application/json')
    this.authHeader = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   }


  getAdminDetails() {
    return this.http.get(this.BASE_API + 'admin/' + this.admId , { headers: this.authHeader});
  }

}
