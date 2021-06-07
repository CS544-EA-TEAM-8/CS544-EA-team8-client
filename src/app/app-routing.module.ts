import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoneAuthGuard } from './guards/none-auth.guard';
import { HomeComponent } from './view/home/home';
import { LoginComponent } from './view/login/login';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoneAuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'hom', pathMatch: 'full', },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
