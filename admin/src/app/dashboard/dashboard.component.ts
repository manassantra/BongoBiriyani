import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authSrvc: AuthServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSrvc.logoutService();
  }

}
