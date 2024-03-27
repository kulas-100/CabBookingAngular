import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCabComponent } from './search-cab.component';

describe('SearchCabComponent', () => {
  let component: SearchCabComponent;
  let fixture: ComponentFixture<SearchCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
