import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  @Input() public formType: 'none' | 'student' | 'working' = 'none';

  studentForm: FormGroup;
  workingForm: FormGroup;
  toolTip = '';
  studentNameInvalid = false;
  gradeInvalid = false;
  schoolInvalid = false;
  parentNameInvalid = false;
  emailInvalid = false;
  phoneNumberInvalid = false;
  chessLevelInvalid = false;
  parentNameValid = false;
  fideRatingInvalid = false;
  fideIdInvalid = false;
  ageInvalid = false;
  occupationInvalid = false;
  nameInvalid = false;
  grades: (string | number)[] = ['Pre-KG', 'KG', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  constructor(public dialogRef: MatDialogRef<AdmissionFormComponent>, private formBuilder: FormBuilder) {
    // Initialize form using FormBuilder
    this.studentForm = this.formBuilder.group({
      student: this.formBuilder.group({
        studentFirstName: ['', [Validators.required, Validators.minLength(2)]], // Create FormControl for studentFirstName
        studentLastName: ['', Validators.required],
      }),
      grade: ['', [Validators.required,  this.gradeValidator]], // Create FormControl for grade
      school: ['', Validators.required],
      parent: this.formBuilder.group({
        parentFirstName: ['', Validators.required], // Create FormControl for parentFirstName
        parentLastName: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]], // Create FormControl for email
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]], // Create FormControl for phoneNumber
      chessTournament: ['', Validators.required],
      chessLevel: this.formBuilder.group({
        beginner: [false], // Create FormControl for beginner
        intermediate: [false], // Create FormControl for intermediate
        advanced: [false] // Create FormControl for advanced
      }, { validators: (formGroup: FormGroup) => {
        const { beginner, intermediate, advanced } = formGroup.value;
        if (!(beginner || intermediate || advanced)) {
          return { noLevelSelected: true };
        }
        return null;
      }})
    });

    this.workingForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      }),
      age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      occupation: ['', Validators.required],
      chessTournament: ['', Validators.required],
      chessLevel: this.formBuilder.group({
        beginner: [false], // Create FormControl for beginner
        intermediate: [false], // Create FormControl for intermediate
        advanced: [false] // Create FormControl for advanced
      }, { validators: (formGroup: FormGroup) => {
        const { beginner, intermediate, advanced } = formGroup.value;
        if (!(beginner || intermediate || advanced)) {
          return { noLevelSelected: true };
        }
        return null;
      }})
    });
  }

  gradeValidator(control: FormControl) {
    const value = control.value;
    if (
      !['Pre-KG', 'KG'].includes(value) &&
      (isNaN(value) || parseInt(value) < 1 || parseInt(value) > 12)
    ) {
      return { invalidGrade: true };
    }
    return null;
  }

  ngOnInit(): void {
  }

  submitStudentForm() {
    if(this.studentForm.invalid) {
      this.studentNameInvalid = this.studentForm.get('student.studentFirstName')?.invalid ?? false;
      this.gradeInvalid = this.studentForm.get('grade')?.invalid ?? false;
      this.schoolInvalid = this.studentForm.get('school')?.invalid ?? false;
      this.parentNameInvalid = this.studentForm.get('parent.parentFirstName')?.invalid ?? false;
      this.emailInvalid = this.studentForm.get('email')?.invalid ?? false;
      this.phoneNumberInvalid = this.studentForm.get('phoneNumber')?.invalid ?? false;
      this.chessLevelInvalid = this.workingForm.get('chessLevel')?.invalid ?? false;
      this.fideIdInvalid = this.studentForm.get('fideId')?.invalid ?? false;
      this.fideRatingInvalid = this.studentForm.get('fideRating')?.invalid ?? false;
    } else {
      this.dialogRef.close();
    }
  }

  submitWorkingForm() {
    if(this.workingForm.invalid) {
      this.nameInvalid = this.workingForm.get('name.firstName')?.invalid ?? false;
      this.ageInvalid = this.workingForm.get('age')?.invalid ?? false;
      this.emailInvalid = this.workingForm.get('email')?.invalid ?? false;
      this.phoneNumberInvalid = this.workingForm.get('phoneNumber')?.invalid ?? false;
      this.occupationInvalid = this.workingForm.get('occupation')?.invalid ?? false;
      this.chessLevelInvalid = this.workingForm.get('chessLevel')?.invalid ?? false;
      this.fideIdInvalid = this.studentForm.get('fideId')?.invalid ?? false;
      this.fideRatingInvalid = this.studentForm.get('fideRating')?.invalid ?? false;
    } else {
      this.dialogRef.close();
    }
  }

  closeForm() {
    this.dialogRef.close();
  }
}
