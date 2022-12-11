import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endPoint = 'https://localhost:44388/api/';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  public loggedInUser: any = null;
  public campToEdit: any = null;

  constructor(private http: HttpClient) { }

  /*
   * Not Used...
  getAllAdmins(): Observable<any> {
    return this.http.get(endPoint + 'admin/all-admins');
  }
  */

  getAdmin(loginData: any) {
    return this.http.post(endPoint + 'admin/login', loginData);
  }

  addNewCamp(addNewCampData: any) {
    return this.http.post(endPoint + 'admin/add-new-camp', addNewCampData);
  }

  updateCamp(updateCampData: any) {
    return this.http.post(endPoint + 'admin/update-camp', updateCampData);
  }

  deleteCamp(camp: any) {
    return this.http.post(endPoint + 'admin/delete-camp', camp);
  }
}