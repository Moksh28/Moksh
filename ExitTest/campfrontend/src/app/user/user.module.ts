import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BookingScreenComponent } from './bookingscreen/bookingscreen.component';
import { ConfirmationScreenComponent } from './confirmationscreen/confirmationscreen.component';
import { ManageBookingComponent } from './managebooking/managebooking.component';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BookingScreenComponent,
    ConfirmationScreenComponent,
    ManageBookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterLinkActive,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class UserModule { }
