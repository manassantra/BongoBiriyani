import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userDetails: any;
  isLoggedin: boolean = false;
  user: User = JSON.parse(localStorage.getItem('bongAuth') || '{}');
  constructor(private authSrvc: AuthService) { }

  ngOnInit(): void {
    if (this.user.authToken && this.user.user && this.user.user) {
      this.userDetails = this.user;
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }

  // Logout
  logout() {
    this.authSrvc.logout();
    window.location.reload();
  }

}
