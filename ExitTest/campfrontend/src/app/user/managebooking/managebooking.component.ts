import { Router } from '@angular/router';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.scss']
})
export class ManageBookingComponent implements OnInit {

  manageBookingForm = new FormGroup({
    referenceId: new FormControl('', [Validators.required])
  });

  ratingForm = new FormGroup({
    rating: new FormControl(5, [Validators.required])
  });

  foundCamp: any = null;
  campRef: any;
  campFinished: any;
  campStartDate: any;
  campEndDate: any;
  campRated: any;

  isCampFinished(): void {
    if(this.campStartDate <= this.getToday()) this.campFinished = true;
    else this.campFinished = false;
  }

  manageBooking(): void {
    this.campRef = this.manageBookingForm.get('referenceId')?.value?.toString()!;
    this.userService.getCampByRef(this.campRef!).subscribe((res) => {
      if(res) {
        this.foundCamp = res;
        // console.log(this.foundCamp);
        this.campRated = this.foundCamp?.isRated;
        this.campStartDate = this.foundCamp?.checkIn.toString();
        this.campEndDate = this.foundCamp?.checkOut.toString();
        this.isCampFinished();
        return;
      } else alert(`Didn't get any camp booking with reference Id ${this.campRef}`);
    })
  }

  getToday() : string {
    return new Date().toISOString().split('T')[0];
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  rateCamp(): void {
    this.userService.rateCamp(this.foundCamp?.id, this.foundCamp?.campId, this.ratingForm.get('rating')?.value!).subscribe((res) => {
      if(res) {
        alert('Camp is rated successfully!');
        this.router.navigate(['/user/manage-booking']);
      } else alert('Something went wrong!');
    })    
  }

  cancelCamp(): void {
    if(!confirm('Do you really wish to cancel your booking?')) {
      return;
    }
    this.userService.cancelCamp(this.campRef).subscribe((res) => {
      if(res) {
        console.log(res);
        alert('Camp Booking cancelled successfully!');
        this.router.navigate(['/dashboard']);
      } else alert(`Didn't get any camp booking with reference Id ${this.campRef}.`);
    });
  }
}