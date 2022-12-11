import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-screen',
  templateUrl: './confirmationscreen.component.html',
  styleUrls: ['./confirmationscreen.component.scss']
})
export class ConfirmationScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  reference: string = '';
  bookingDetails: any = null;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.reference = (params['reference']);
    });
    this.userService.getCampById(this.reference).subscribe((res) => {
      this.bookingDetails = res;
    })
  }
}