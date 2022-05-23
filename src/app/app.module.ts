import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './Authentication/registerform/registerform.component';
import { LoginformComponent } from './Authentication/LoginForm/loginform/loginform.component';
import { HeaderComponent } from './Dashboard/Body/header/header.component';
import { MainpageComponent } from './Dashboard/Header/mainpage/mainpage.component';
import { SidenavComponent } from './Dashboard/SideNav/sidenav/sidenav.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    LoginformComponent,
    HeaderComponent,
    MainpageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
