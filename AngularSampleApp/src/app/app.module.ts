import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, CanActivate } from '@angular/router';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {
  AuthGuardService as AuthGuard
} from './signin/auth-guard.service';
import { AuthService } from './signin/auth.service';

const ROUTES: Route[] = [
  { path: '', component: SigninComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ResourceModule.forRoot()
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
