import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './bookingscreen.component.html',
  styleUrls: ['./bookingscreen.component.scss']
})
export class BookingScreenComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }
  
  selectedCamp: any;
  dateArr: any;
  totalDays: any = 1;
  totalCost: any = this.userService.selectedCamp.rate;
  referenceNumber: any;
  datesInBetween: string = '';
  clashOfDates: boolean = false;
  wrongDate: boolean = false;
  
  ngOnInit(): any {
    if(!this.selectedCamp == null) {
      return this.router.navigate(['/dashboard']);
    }
    this.clashOfDates = false;
    this.wrongDate = false;
    this.selectedCamp = this.userService.selectedCamp;
    console.log(this.selectedCamp);
  }

  bookingForm = new FormGroup({
    id: new FormControl,
    campId: new FormControl,
    cost: new FormControl,
    days: new FormControl,
    checkIn: new FormControl(this.getToday(), [Validators.required]),
    checkOut: new FormControl(this.getTomorrow(), [Validators.required]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    zip: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  });

  getToday() : string {
    return new Date().toISOString().split('T')[0];
  }

  getTomorrow() : string {
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
    return tomorrow;
  }

  getDates() {
    var startDate = this.bookingForm.get('checkIn')?.value;
    var endDate = this.bookingForm.get('checkOut')?.value;
    this.getDatesInBetween(startDate, endDate)
    this.totalDays = this.dateArr.length;
    this.datesInBetween = this.dateArr.toString();
  }

  getBill() {
    this.totalCost = this.totalDays * this.selectedCamp.rate;
  }

  getDatesInBetween(startDate: any, endDate: any) {
    this.dateArr = [];
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    if(startDate > endDate) this.wrongDate = true;
    else this.wrongDate = false;
    var dt = startDate;
    while (dt <= endDate) {
      this.dateArr.push(new Date(dt).toISOString().split('T')[0]);
      dt.setDate(dt.getDate() + 1)
    }
  }

  checkDateClash(dates?: string): boolean {
    let flag: boolean = false;
    for(let i = 0; i < this.dateArr.length; i++){
      if(dates?.includes(this.dateArr[i].toString()!)) {
        flag = true;
        return flag;
      } else flag = false;
    }
    return flag;
  }

  handler() {
    this.getDates();
    if(this.checkDateClash(this.selectedCamp.bookingDates)) {
      this.clashOfDates = true;
    } else {
      this.clashOfDates = false;
      this.getBill();
    }    
  }

  generateBookingId(): string {
    const allAlphanumericChararacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for(var i = 0; i < 8; i++) {
      result += allAlphanumericChararacters.charAt(Math.floor(Math.random() * allAlphanumericChararacters.length))
    }
    return result;
  }

  bookCamp() {
    let bookCampVal = this.bookingForm.value;
    bookCampVal.id = this.generateBookingId();
    this.referenceNumber = bookCampVal.id;
    bookCampVal.campId = this.selectedCamp.id;
    bookCampVal.days = this.totalDays.toString();
    bookCampVal.cost = this.totalCost.toString();
    this.userService.bookACamp(bookCampVal, this.datesInBetween).subscribe((res) => {
      if(res) {
        this.bookingForm.reset();
        this.userService.selectedCamp = null;
        alert('Booking Successful!');
        this.router.navigate(['/confirm-booking'], { queryParams: { reference: this.referenceNumber } });
      } else alert('Something Went Wrong!');
    })
  }
}