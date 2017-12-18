import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrisdictionComponent } from './urisdiction.component';

describe('UrisdictionComponent', () => {
  let component: UrisdictionComponent;
  let fixture: ComponentFixture<UrisdictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrisdictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrisdictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
