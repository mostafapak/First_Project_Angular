import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtfoundComponent } from './otfound.component';

describe('OtfoundComponent', () => {
  let component: OtfoundComponent;
  let fixture: ComponentFixture<OtfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtfoundComponent]
    });
    fixture = TestBed.createComponent(OtfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
