import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentRegistrationPopUpComponent } from './tournament-pop-up.component';

describe('TournamentRegistrationPopUpComponent', () => {
  let component: TournamentRegistrationPopUpComponent;
  let fixture: ComponentFixture<TournamentRegistrationPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentRegistrationPopUpComponent]
    });
    fixture = TestBed.createComponent(TournamentRegistrationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
