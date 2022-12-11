import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint = 'https://localhost:44388/api/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  selectedCamp: any = null;

  getCamps(): any {
    return this.http.get(endPoint + 'home/all-camps');
  }

  bookACamp(bookingData: any, dates : string) {
    return this.http.post(endPoint + 'home/book-a-camp/'+dates, bookingData);
  }

  getCampById(req: string) {
    return this.http.get(endPoint + 'home/get-camp/' + req);
  }

  getCampByRef(manageCampData: string) {
    return this.http.get(endPoint + 'home/manage-camp/' + manageCampData);
  }

  cancelCamp(campRef: string) {
    return this.http.get(endPoint + 'home/cancel-booking/' + campRef);
  }

  rateCamp(bookingId: string, campId: string, rating: number) {
    return this.http.get(endPoint + 'home/rate-camp/' + bookingId + '/' + campId + '/' + rating)
  }
}