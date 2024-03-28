import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRatingComponent } from './driver-rating.component';

describe('DriverRatingComponent', () => {
  let component: DriverRatingComponent;
  let fixture: ComponentFixture<DriverRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
