import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerGymnaseComponent } from './lister-gymnase.component';

describe('ListerGymnaseComponent', () => {
  let component: ListerGymnaseComponent;
  let fixture: ComponentFixture<ListerGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
