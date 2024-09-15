import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GesturePageComponent } from './gesture-page.component';

describe('GesturePageComponent', () => {
  let component: GesturePageComponent;
  let fixture: ComponentFixture<GesturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GesturePageComponent]
    });
    fixture = TestBed.createComponent(GesturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
