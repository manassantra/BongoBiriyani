import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  notyf = new Notyf();
  constructor(private authSrvc: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authSrvc.login(this.model).subscribe(res=>{
      this.notyf.success("Login Successful !")
    }, err => {
      this.notyf.error("Error : +" + err);
    })
  }
}
