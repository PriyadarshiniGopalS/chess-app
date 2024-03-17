import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EnrollService } from 'src/app/services/enroll.service';

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
  
  constructor(
    public dialogRef: MatDialogRef<AdmissionFormComponent>,
    private formBuilder: FormBuilder,
    private readonly enrollService: EnrollService
  ) {
    // Initialize form using FormBuilder
    this.studentForm = this.formBuilder.group({
      student: this.formBuilder.group({
        studentFirstName: ['', this.firstNameValidator], // Create FormControl for studentFirstName
        studentLastName: [''],
      }),
      grade: ['', [Validators.required,  this.gradeValidator]], // Create FormControl for grade
      school: ['', [Validators.required, Validators.minLength(5)]],
      parent: this.formBuilder.group({
        parentFirstName: ['', this.firstNameValidator], // Create FormControl for parentFirstName
        parentLastName: ['']
      }),
      email: ['', this.mailValidator], // Create FormControl for email
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]], // Create FormControl for phoneNumber
      fide: this.formBuilder.group({
        id: ['', this.fideIdValidator],
        rating: ['', this.fideRatingValidator]
      }),
      chessLevel: this.formBuilder.group({
        beginner: [false], // Create FormControl for beginner
        intermediate: [false], // Create FormControl for intermediate
        advanced: [false] // Create FormControl for advanced
      })
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

  private mailValidator(control: FormControl) {
    const value = control.value;
    if (!value) {
      return { emailInvalid: true };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      return { emailInvalid: true };
    }

    const disposableEmailDomains = [
      'mailinator.com',
      'guerrillamail.com'
    ];
    const domain = value.split('@')[1];
    if (disposableEmailDomains.includes(domain)) {
      return { disposableEmail: true };
    }

    return null;
  }

  private fideIdValidator(control: FormControl) {
    const value = control.value;
    if (value && (isNaN(value) || value.length !== 7)) {
      return { fideIdInvalid: true };
    }
    return null;
  }

  private fideRatingValidator(control: FormControl) {
    const value = control.value;
    if (value && (isNaN(value) || parseInt(value) < 1000 || parseInt(value) > 3000)) {
      return { fideRatingInvalid: true };
    }
    return null;
  }

  private firstNameValidator(control: FormControl) {
    const value = control.value;
    if (value && value.length >= 2) {
      return null;
    }
    return { firstNameInvalid: true };
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
    // if(this.studentForm.invalid) {
    //   this.studentNameInvalid = this.studentForm.get('student.studentFirstName')?.invalid ?? false;
    //   this.gradeInvalid = this.studentForm.get('grade')?.invalid ?? false;
    //   this.schoolInvalid = this.studentForm.get('school')?.invalid ?? false;
    //   this.parentNameInvalid = this.studentForm.get('parent.parentFirstName')?.invalid ?? false;
    //   this.emailInvalid = this.studentForm.get('email')?.invalid ?? false;
    //   this.phoneNumberInvalid = this.studentForm.get('phoneNumber')?.invalid ?? false;
    //   this.chessLevelInvalid = this.workingForm.get('chessLevel')?.invalid ?? false;
    //   this.fideIdInvalid = this.studentForm.get('fide.id')?.invalid ?? false;
    //   this.fideRatingInvalid = this.studentForm.get('fide.rating')?.invalid ?? false;
    // } else {
    //   this.enrollService.addStudent(this.studentForm.value).subscribe((response) => {
    //     if(response) {
    //       this.dialogRef.close();
    //     } else {
    //       this.toolTip = 'Same student already exists';
    //     }
    //   });
    // }
    this.enrollService.addStudent(this.studentForm.value).subscribe((response) => {
      if(response) {
        this.dialogRef.close();
      } else {
        this.toolTip = 'Same student already exists';
      }
    });
  }

  submitWorkingForm() {
    if(this.workingForm.invalid) {
      this.nameInvalid = this.workingForm.get('name.firstName')?.invalid ?? false;
      this.ageInvalid = this.workingForm.get('age')?.invalid ?? false;
      this.emailInvalid = this.workingForm.get('email')?.invalid ?? false;
      this.phoneNumberInvalid = this.workingForm.get('phoneNumber')?.invalid ?? false;
      this.occupationInvalid = this.workingForm.get('occupation')?.invalid ?? false;
      this.chessLevelInvalid = this.workingForm.get('chessLevel')?.invalid ?? false;
      this.fideIdInvalid = this.studentForm.get('fide.id')?.invalid ?? false;
      this.fideRatingInvalid = this.studentForm.get('fide.rating')?.invalid ?? false;
    } else {
      this.dialogRef.close();
    }
  }

  closeForm() {
    this.dialogRef.close();
  }
}
