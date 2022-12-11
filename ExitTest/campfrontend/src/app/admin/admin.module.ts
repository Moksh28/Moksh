import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';

import { ManageCampComponent } from './managecamp/managecamp.component';
import { UpdateCampComponent } from './updatecamp/updatecamp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewCampComponent } from './addnewcamp/addnewcamp.component';

@NgModule({
  declarations: [
    LoginComponent,
    AddNewCampComponent,
    ManageCampComponent,
    UpdateCampComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    
     ]
})
export class AdminModule { }
