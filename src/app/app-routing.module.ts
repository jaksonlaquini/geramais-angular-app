import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  // { path: 'register',           component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'login',          component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
