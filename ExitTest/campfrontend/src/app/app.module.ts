import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
//import { Fo/oterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  //  FooterComponent,
  DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
   // NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    UserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }