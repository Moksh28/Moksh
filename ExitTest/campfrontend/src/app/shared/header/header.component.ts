import { AdminService } from 'src/app/Service/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    let text = 'Do you want to Log Out?';
    if(confirm(text) == true) {
      this.adminService.loggedInUser = null;
      this.router.navigate(['/dashboard']);
    } 
  }
}