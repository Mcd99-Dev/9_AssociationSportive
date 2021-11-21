import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGymnaseComponent } from './ajouter-gymnase.component';

describe('AjouterGymnaseComponent', () => {
  let component: AjouterGymnaseComponent;
  let fixture: ComponentFixture<AjouterGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
