import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HeaderComponent } from './header/header.component';

//import { DashBoardComponent } from './dashboard/dashboard.component';
import { RouterLinkActive } from '@angular/router';
import { AdminModule } from '../admin/admin.module';
import { UserModule } from '../user/user.module';
@NgModule({
  declarations: [
   // HeaderComponent,
  
   // DashBoardComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    RouterLinkActive
  ],
  exports:[]
})
export class SharedModule { }
