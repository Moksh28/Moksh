import { AdminService } from 'src/app/Service/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  
  constructor(private router: Router, private http: HttpClient, private adminService: AdminService) { }

  login() {
    let loginData = this.loginForm.value;
    this.adminService.getAdmin(loginData).subscribe((res) => {
      if(res) {
        this.adminService.loggedInUser = res;
        alert('Login Successful');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid Login Credentials!');
      }
    })
  }


  ngOnInit(): void {
  }

}