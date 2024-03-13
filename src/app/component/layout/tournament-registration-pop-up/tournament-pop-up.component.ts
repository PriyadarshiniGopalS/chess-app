import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tournament-pop-up',
  templateUrl: './tournament-pop-up.component.html',
  styleUrls: ['./tournament-pop-up.component.css']
})
export class TournamentRegistrationPopUpComponent {

  constructor(public dialogRef: MatDialogRef<TournamentRegistrationPopUpComponent>) { }

  closePopUp() {
    this.dialogRef.close();
  } 
}
