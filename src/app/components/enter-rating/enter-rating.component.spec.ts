import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRatingComponent } from './enter-rating.component';

describe('EnterRatingComponent', () => {
  let component: EnterRatingComponent;
  let fixture: ComponentFixture<EnterRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
