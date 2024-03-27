import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCabsComponent } from './display-all-cabs.component';

describe('DisplayAllCabsComponent', () => {
  let component: DisplayAllCabsComponent;
  let fixture: ComponentFixture<DisplayAllCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllCabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
