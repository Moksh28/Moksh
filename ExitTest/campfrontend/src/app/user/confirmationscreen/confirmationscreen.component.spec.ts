import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationscreenComponent } from './confirmationscreen.component';

describe('ConfirmationscreenComponent', () => {
  let component: ConfirmationscreenComponent;
  let fixture: ComponentFixture<ConfirmationscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
