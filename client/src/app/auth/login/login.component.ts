import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Notyf } from 'notyf';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  notyf = new Notyf();
  user: User = JSON.parse(localStorage.getItem('bongAuth') || '{}');
  constructor(private authSrvc: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authSrvc.login(this.model).subscribe(res=>{
      this.notyf.success("Login Successful !")
      window.location.replace('');
    }, err => {
      this.notyf.error("Error : " + err.error);
    })
  }
}
