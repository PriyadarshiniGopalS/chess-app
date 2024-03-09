import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  form: FormGroup; // Define form group
  formData: any = {};
  toolTip = '';

  constructor(public dialogRef: MatDialogRef<AdmissionFormComponent>, private fb: FormBuilder) {
    // Initialize form using FormBuilder
    this.form = this.fb.group({
      studentFirstName: ['', Validators.required], // Create FormControl for studentFirstName
      studentLastName: ['', Validators.required],
      grade: ['', Validators.required], // Create FormControl for grade
      school: ['', Validators.required], // Create FormControl for school
      parentFirstName: ['', Validators.required], // Create FormControl for parentFirstName
      parentLastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Create FormControl for email
      phoneNumber: ['', Validators.required], // Create FormControl for phoneNumber
      chessTournament: ['', Validators.required], // Create FormControl for chessTournament
      levelBeginner: [false], // Create FormControl for beginner
      levelIntermediate: [false], // Create FormControl for intermediate
      levelAdvanced: [false] // Create FormControl for advanced
    });
  }
  ngOnInit(): void {
  }

  submitForm() {
    this.dialogRef.close();
  }

  closeForm() {
    this.dialogRef.close();
  }
  
}
