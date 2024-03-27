import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllDriversComponent } from './display-all-drivers.component';

describe('DisplayAllDriversComponent', () => {
  let component: DisplayAllDriversComponent;
  let fixture: ComponentFixture<DisplayAllDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllDriversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
