import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitPopUpComponent } from './kit-pop-up.component';

describe('KitPopUpComponent', () => {
  let component: KitPopUpComponent;
  let fixture: ComponentFixture<KitPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitPopUpComponent]
    });
    fixture = TestBed.createComponent(KitPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
