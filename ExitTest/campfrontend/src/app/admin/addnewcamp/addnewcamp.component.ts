import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/Service/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-camp',
  templateUrl: './addnewcamp.component.html',
  styleUrls: ['./addnewcamp.component.scss']
})
export class AddNewCampComponent implements OnInit {

  newCampForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
    capacity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });

  url = ".././assets/nagarro.png";

  onImageSelect(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('Invalid Format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.url = reader.result;
    console.log(this.url);
    console.log(typeof(this.url));
    this.newCampForm.patchValue({
      image: this.url
    });
  }

  constructor(private router: Router, private adminService: AdminService, private http: HttpClient) { }

  addCamp(): void {
    let addNewCampData = this.newCampForm.value;
    console.log(addNewCampData);
    this.adminService.addNewCamp(addNewCampData).subscribe((res) => {
      if(res) {
        this.adminService.loggedInUser = res;
        alert('New Camp Added Successfully.');
        this.newCampForm.reset();
        this.router.navigate(['/dashboard']);
      } else alert('Something went wrong.');
    })
  }

  ngOnInit(): any {
    if(!this.adminService.loggedInUser) {
      return this.router.navigate(['/admin/login']);
    }
  }

}