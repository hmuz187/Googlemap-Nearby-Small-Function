import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HomeComponent } from './pages/home/home.component';
import { GooglemapComponent } from './pages/googlemap/googlemap.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminAsideComponent } from './components/admin-aside/admin-aside.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    HomeComponent,
    GooglemapComponent,
    LoginComponent,
    AdminHeaderComponent,
    AdminAsideComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // import HttpClientModule after BrowserModule.
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
