import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecampComponent } from './updatecamp.component';

describe('UpdatecampComponent', () => {
  let component: UpdatecampComponent;
  let fixture: ComponentFixture<UpdatecampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
