import { UserService } from './../../Service/user.service';
import { AdminService } from './../../Service/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-camp',
  templateUrl: './managecamp.component.html',
  styleUrls: ['./managecamp.component.scss']
})
export class ManageCampComponent implements OnInit {

  camps: any = null;

  constructor(private router: Router, private adminService: AdminService, private userService: UserService) { }

  ngOnInit(): any {
    if(!this.adminService.loggedInUser) {
      return this.router.navigate(['/admin/login']);
    }
    this.getAllRecords();
  }

  getAllRecords() {
    this.userService.getCamps().subscribe((res: any) => {
      this.camps = res;
      if(!res) {
        alert('No Records Found!');
      }
    })
  }

  updateCamp(camp: any) {
    this.adminService.campToEdit = camp;    
    this.router.navigate(['/admin/update-camp']);
  }

  deleteCamp(camp: any) {
    let text = 'Do you want to delete the Camp?';
    if(confirm(text) == true) {
      this.adminService.deleteCamp(camp).subscribe((res: any) => {
        if(res) {
          alert('Camp Deleted Successfully.');
          this.getAllRecords();
          this.router.navigate(['/admin/manage-camps']);
        } else alert('Something Went Wrong!');
      })
    } else alert('Failed to delete!');
  }
}