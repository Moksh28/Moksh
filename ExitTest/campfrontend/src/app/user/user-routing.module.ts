//import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { ConfirmationScreenComponent } from './confirmationscreen/confirmationscreen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingScreenComponent } from './bookingscreen/bookingscreen.component';
//import { BookingScreenComponent } from './booking-screen/booking-screen.component';
import { ManageBookingComponent } from './managebooking/managebooking.component';
//import { ManageBookingComponent } from './manage-booking/manage-booking.component';

const routes: Routes = [
  { path: 'booking-screen', component: BookingScreenComponent }, 
  { path: 'confirm-booking', component: ConfirmationScreenComponent },
  { path: 'user/manage-booking', component: ManageBookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }