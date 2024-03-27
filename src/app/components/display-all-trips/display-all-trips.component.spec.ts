import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllTripsComponent } from './display-all-trips.component';

describe('DisplayAllTripsComponent', () => {
  let component: DisplayAllTripsComponent;
  let fixture: ComponentFixture<DisplayAllTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllTripsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
