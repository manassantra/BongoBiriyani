import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent, canActivate: [AuthGuardGuard]},
  {path:'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
