import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Notyf } from 'notyf';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  adminExist: any;
  notyf = new Notyf();
//  route: any;
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const admin: Admin = JSON.parse(localStorage.getItem('bong-ADMAuth') || '{}');
      var url = route.url.toString();
      if (admin.admAuthToken && admin.admId){
        if(url == 'login') {
          this.notyf.success("Already loggedin...");
          this.router.navigate(['']);
          return false;
        }
        return true;
      } else {
        if(url != 'login') {
          this.router.navigate(['/login']);
          return true;
        }
        return true;
      }
  }
  
}
