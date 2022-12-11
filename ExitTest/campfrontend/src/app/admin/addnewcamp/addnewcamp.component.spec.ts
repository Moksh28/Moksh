import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcampComponent } from './addnewcamp.component';

describe('AddnewcampComponent', () => {
  let component: AddnewcampComponent;
  let fixture: ComponentFixture<AddnewcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
