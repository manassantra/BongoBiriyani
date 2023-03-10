import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  admUserDetails: any = {};

  constructor(private authSrvc: AuthServiceService, private admSvc: AdminService) { }

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails() {
    this.admSvc.getAdminDetails().subscribe(res=>{
      this.admUserDetails = res;
    }, err=> {
      console.log(err);
    })
  }

  logout() {
    this.authSrvc.logoutService();
  }

}
