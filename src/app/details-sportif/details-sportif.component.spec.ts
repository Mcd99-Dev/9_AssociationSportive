import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSportifComponent } from './details-sportif.component';

describe('DetailsSportifComponent', () => {
  let component: DetailsSportifComponent;
  let fixture: ComponentFixture<DetailsSportifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSportifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
