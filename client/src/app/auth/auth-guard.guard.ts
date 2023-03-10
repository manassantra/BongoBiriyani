import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  userExist: any;
  notyf = new Notyf();
//  route: any;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //  const user: User = JSON.parse(localStorage.getItem('bongAuth') || '{"authToken" : "1659947367.411838", "uId": "001"}');
      const user: User = JSON.parse(localStorage.getItem('bongAuth') || '{}');
      var url = route.url.toString();
      if (user.authToken && user.uId){
        if(url == 'login') {
          this.notyf.success("All-ready loggedin...");
          this.router.navigate(['']);
          return false;
        }
        return true;
      } else {
        if(url != 'login') {
          this.notyf.error("Please Login to continioue...");
          this.router.navigate(['/login']);
          return true;
        }
        return true;
      }
  }
}
