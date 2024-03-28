import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideLeaveComponent } from './decide-leave.component';

describe('DecideLeaveComponent', () => {
  let component: DecideLeaveComponent;
  let fixture: ComponentFixture<DecideLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecideLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecideLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
