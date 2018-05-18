import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule, CanActivate } from '@angular/router';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { HttpClientModule } from '@angular/common/http';

import { PhotosResource } from './resources/PhotosResource';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {
  AuthGuardService as AuthGuard
} from './signin/auth-guard.service';
import { AuthService } from './signin/auth.service';
import { PhotoComponent } from './photo/photo.component';

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
    SigninComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ResourceModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, PhotosResource],
  bootstrap: [AppComponent]
})
export class AppModule { }
