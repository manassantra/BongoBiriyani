import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/User';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  apiurl = "http://localhost:8080/api/";
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
  notyf = new Notyf();
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  login(model: any) {
    return this.http.post(this.apiurl + 'auth/login' , model ).pipe(map((res)=>{
      this.user = localStorage.setItem('bongAuth', JSON.stringify(res));
      this.setCurrentUser(this.user);
    }));
  }

  // tslint:disable-next-line:typedef
  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  // tslint:disable-next-line:typedef
  logout(){
    localStorage.removeItem('bongoAuth');
    this.currentUserSource.next(null);
  }
}
