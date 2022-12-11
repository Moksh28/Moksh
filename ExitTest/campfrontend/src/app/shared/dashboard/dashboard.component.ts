import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup,ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "src/app/Service/admin.service";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  // Variables
  camps: any = null;
  posts: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [2, 4, 6, 8, 10];

  wrongDate: boolean = false;
  showDiv: boolean = true;
  filteredCamps: any;
  dateArr: string[] = [];

  constructor(private router: Router, public userService: UserService, public adminService: AdminService) { }
  
  ngOnInit(): void {
    this.wrongDate = false;
    this.fetchCamps();
  }

  filterForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    capacity: new FormControl('1')
  })

  getFilteredCamps() {
    this.dateArr = [];
    this.camps = this.posts;
    this.getDates();
    var result = Array.prototype.filter.call(this.camps, (x) => 
      x.capacity >= this.filterForm.get('capacity')?.value! && !this.checkDateClash(x.bookingDates)
    );
    this.camps = result;
    if(!this.camps) this.showDiv = true;
  }

  clearFilter() : void {
    // console.log("Clear Filter clicked.");
    this.camps = this.posts;
    console.log(this.camps);
  }

  getDates() {
    var startDate = this.filterForm.get('startDate')?.value;
    var endDate = this.filterForm.get('endDate')?.value;
    this.getDatesInBetween(startDate, endDate);
    // console.log('Dates in between: ', this.dateArr);
  }

  getDatesInBetween(startDate: any, endDate: any) {
    this.dateArr = [];
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    if(startDate > endDate) this.wrongDate = true;
    else this.wrongDate = false;
    var dt = startDate;
    while(dt <= endDate) {
      this.dateArr.push(new Date(dt).toISOString().split('T')[0]);
      dt.setDate(dt.getDate() + 1);
    }
  }

  checkDateClash(dates?: string) : boolean {
    let flag: boolean = false;
    for(let i = 0; i < this.dateArr.length; i++) {
      if(dates?.includes(this.dateArr[i].toString()!)) {
        flag = true;
        return flag;
      } else flag = false;
    }
    return flag;
  }

  handler() {
    this.getDates();
  }

  fetchCamps() : void {
    this.userService.getCamps().subscribe((res: any) => {
      this.camps = res;
      this.posts = res;
    })
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  getTomorrow(): string {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
  }

  getCamp(camp: any) : void {
    this.userService.selectedCamp = camp;
    this.router.navigate(['booking-screen']);
  }

  onTableDataChange(event: any) : void {
    this.page = event;
    this.getFilteredCamps();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getFilteredCamps();
  }
}