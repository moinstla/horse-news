import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsePersonalsComponent } from './horse-personals.component';

describe('HorsePersonalsComponent', () => {
  let component: HorsePersonalsComponent;
  let fixture: ComponentFixture<HorsePersonalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsePersonalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsePersonalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
