import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRatingComponent } from './post-rating.component';

describe('PostRatingComponent', () => {
  let component: PostRatingComponent;
  let fixture: ComponentFixture<PostRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
