import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingscreenComponent } from './bookingscreen.component';

describe('BookingscreenComponent', () => {
  let component: BookingscreenComponent;
  let fixture: ComponentFixture<BookingscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
