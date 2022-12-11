import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecampComponent } from './managecamp.component';

describe('ManagecampComponent', () => {
  let component: ManagecampComponent;
  let fixture: ComponentFixture<ManagecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
