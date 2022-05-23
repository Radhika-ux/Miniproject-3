import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './Authentication/LoginForm/loginform/loginform.component';
import { RegisterformComponent } from './Authentication/registerform/registerform.component';
import { HeaderComponent } from './Dashboard/Body/header/header.component';
import { MainpageComponent } from './Dashboard/Header/mainpage/mainpage.component';
import { SidenavComponent } from './Dashboard/SideNav/sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:RegisterformComponent},
  {path:'loginform',component:LoginformComponent},
  {path:'header',component:HeaderComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'sidenav',component:SidenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
