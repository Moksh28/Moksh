import { ManageCampComponent } from './managecamp/managecamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCampComponent } from './addnewcamp/addnewcamp.component';
import { LoginComponent } from './login/login.component';
import { UpdateCampComponent } from './updatecamp/updatecamp.component';
const routes: Routes = [
  { path:'admin/login', component: LoginComponent },
  { path: 'admin/add-new-camp', component: AddNewCampComponent },
  { path: 'admin/update-camp', component: UpdateCampComponent },
  { path: 'admin/manage-camps', component: ManageCampComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }