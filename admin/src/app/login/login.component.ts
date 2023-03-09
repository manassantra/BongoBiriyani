import { Component, OnInit } from '@angular/core';
import { Notyf } from 'notyf';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  notyf = new Notyf();
  constructor(private authSvc: AuthServiceService) { }

  ngOnInit(): void {
  }

  login() {
    this.authSvc.loginService(this.model).subscribe((res)=>{
      this.notyf.success("Login Successful !")
      window.location.replace('');
      }, err => {
      this.notyf.error("Error : " + err.error);
    })
  }
}
