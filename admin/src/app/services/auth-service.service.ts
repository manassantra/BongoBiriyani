import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private currentUserSource = new ReplaySubject<Admin>(1);
  currentUser$ = this.currentUserSource.asObservable();
  API_BASE: any = "http://localhost:8080/api/";
  admin: any = JSON.parse(localStorage.getItem('bong-ADMAuth') || '{}');

  constructor(private http: HttpClient) { }

  loginService(model:any){
    return this.http.post(this.API_BASE + 'auth/admin/login', model).pipe(map((res)=>{
      this.admin = localStorage.setItem('bong-ADMAuth', JSON.stringify(res));
      this.setCurrentUser(this.admin);
    }));
  }

  setCurrentUser(user: Admin) {
    this.currentUserSource.next(user);
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  logoutService(){
    localStorage.removeItem('bong-ADMAuth');
    this.currentUserSource.next(this.admin);
    window.location.replace('');
  }
}
