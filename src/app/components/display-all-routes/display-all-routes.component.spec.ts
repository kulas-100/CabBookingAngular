import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllRoutesComponent } from './display-all-routes.component';

describe('DisplayAllRoutesComponent', () => {
  let component: DisplayAllRoutesComponent;
  let fixture: ComponentFixture<DisplayAllRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
