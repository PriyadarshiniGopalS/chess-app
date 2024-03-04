import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  formData: any = {};

  constructor(public dialogRef: MatDialogRef<AdmissionFormComponent>) { }
  ngOnInit(): void {
  }

  submitForm() {
    this.dialogRef.close();
  }

}
