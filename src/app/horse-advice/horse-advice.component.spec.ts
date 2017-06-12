import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseAdviceComponent } from './horse-advice.component';

describe('HorseAdviceComponent', () => {
  let component: HorseAdviceComponent;
  let fixture: ComponentFixture<HorseAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
