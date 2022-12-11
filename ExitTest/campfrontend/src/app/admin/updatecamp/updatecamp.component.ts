import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/Service/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-camp',
  templateUrl: './updatecamp.component.html',
  styleUrls: ['./updatecamp.component.scss']
})
export class UpdateCampComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService, private http: HttpClient) { }

  updateCampForm = new FormGroup({
    id: new FormControl,
    title: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
    capacity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl()
  });

  camp: any = null;
  url: any = null;

  updateCamp(): void {
    let updateCampData = this.updateCampForm.value;
    this.adminService.updateCamp(updateCampData).subscribe((res: any) => {
      if(res) {
        this.updateCampForm.reset();
        this.adminService.campToEdit = null;
        this.router.navigate(['/admin/manage-camps']);
        alert('Camp Updated Successfully.');
      } else alert('Something Went Wrong!');
    })
  }

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
    this.updateCampForm.patchValue({
      image: this.url
    });
  }

  ngOnInit(): any {
    if(!this.adminService.loggedInUser) {
      return this.router.navigate(['/admin/login']);
    }
    this.camp = this.adminService.campToEdit;
    this.updateCampForm.setValue( {
      id: this.camp.id,
      title: this.camp.title,
      rate: this.camp.rate,
      capacity: this.camp.capacity,
      description: this.camp.description,
      image: this.url ? this.url : this.camp.image
    });
  }
}