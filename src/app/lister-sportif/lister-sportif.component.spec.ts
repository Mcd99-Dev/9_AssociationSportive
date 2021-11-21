import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerSportifComponent } from './lister-sportif.component';

describe('ListerSportifComponent', () => {
  let component: ListerSportifComponent;
  let fixture: ComponentFixture<ListerSportifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerSportifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
