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
  grades: (string | number)[] = ['Pre-KG', 'KG', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  age: number | undefined;
  
  constructor(
    public dialogRef: MatDialogRef<AdmissionFormComponent>,
    private formBuilder: FormBuilder,
    private readonly enrollService: EnrollService
  ) {
    this.studentForm = this.formBuilder.group({
      student: this.formBuilder.group({
        studentFirstName: ['', this.firstNameValidator],
        studentLastName: [''],
      }),
      dateOfBirth: ['' , this.dateOfBirthValidator],
      age: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      school: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      parent: this.formBuilder.group({
        parentFirstName: ['', this.firstNameValidator],
        parentLastName: ['']
      }),
      email: ['', this.mailValidator],
      phoneNumber: ['', this.phoneNumberValidator],
      fide: this.formBuilder.group({
        id: ['', this.fideIdValidator],
        rating: ['', this.fideRatingValidator]
      }),
      chessLevel: ['']
    });

    this.workingForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', this.firstNameValidator],
        lastName: ['', Validators.required]
      }),
      dateOfBirth: ['' , this.dateOfBirthValidator],
      age: ['', [Validators.required]],
      email: ['', this.mailValidator],
      phoneNumber: ['', this.phoneNumberValidator],
      fide: this.formBuilder.group({
        id: ['', this.fideIdValidator],
        rating: ['', this.fideRatingValidator]
      }),
      chessLevel: ['']
    });
  }

  public calculateAge(event: any) {
    const today = new Date();
    const birthDate = new Date(event.target.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }

  ngOnInit(): void {
  }

  submitStudentForm() {
    if(this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      const request = {
        name: `${this.studentForm.get('student.studentFirstName')?.value} ${this.studentForm.get('student.studentLastName')?.value}`,
        age: this.studentForm.get('age')?.value,
        dateOfBirth: this.studentForm.get('dateOfBirth')?.value,
        grade: this.studentForm.get('grade')?.value,
        school: this.studentForm.get('school')?.value,
        parentName: `${this.studentForm.get('parent.parentFirstName')?.value} ${this.studentForm.get('parent.parentLastName')?.value}`,
        parentEmail: this.studentForm.get('email')?.value,
        phoneNumber: this.studentForm.get('phoneNumber')?.value,
        fideID: this.studentForm.get('fide.id')?.value,
        fideRating: this.studentForm.get('fide.rating')?.value,
        fideRatingLevel: this.studentForm.get('chessLevel')?.value
      };

      this.enrollService.addStudent(request).subscribe((response) => {
        if(response) {
          this.dialogRef.close();
        } else {
          this.toolTip = 'Same student is already enrolled';
        }
      });
    }
  }

  submitWorkingForm() {
    if(this.workingForm.invalid) {
      this.workingForm.markAllAsTouched();
    } else {
      const request = {
      name: `${this.workingForm.get('name.firstName')?.value} ${this.workingForm.get('name.lastName')?.value}`,
      age: this.workingForm.get('age')?.value,
      dateOfBirth: this.workingForm.get('dateOfBirth')?.value,
      email: this.workingForm.get('email')?.value,
      phoneNumber: this.workingForm.get('phoneNumber')?.value,
      fideID: this.workingForm.get('fide.id')?.value,
      fideRating: this.workingForm.get('fide.rating')?.value,
      fideRatingLevel: this.workingForm.get('chessLevel')?.value,
      occupation: this.workingForm.get('Occupations')?.value      
    };

    this.enrollService.addProfessional(request).subscribe((response) => {
      if(response) {
        this.dialogRef.close();
      } else {
        this.toolTip = 'Same working professional is already enrolled';
      }
    });
    }
  }

  closeForm() {
    this.dialogRef.close();
  }

  private firstNameValidator(control: FormControl) {
    const value = control.value;
    if (value && value.length >= 2 && value.length <= 30) {
      return null;
    }
    return { firstNameInvalid: true };
  }

  private dateOfBirthValidator(control: FormControl) {
    const value = control.value;
    if (!value) {
      return { dateOfBirthInvalid: true };
    }
    return null;
  }

  private phoneNumberValidator(control: FormControl) {
    const value = control.value;
    if (!value) {
      return { phoneNumberInvalid: true };
    }

    const phoneNumberRegex = /^[0-9]*$/;

    if (!phoneNumberRegex.test(value) || value.length !== 10) {
      return { phoneNumberInvalid: true };
    }

    return null;
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
    if (value && (isNaN(value) || value.length < 6 || value.length > 9)) {
      return { fideIdInvalid: true };
    }
    return null;
  }

  private fideRatingValidator(control: FormControl) {
    const value = control.value;
    if (value && (isNaN(value) || parseInt(value) < 1400 || parseInt(value) > 3000)) {
      return { fideRatingInvalid: true };
    }
    return null;
  }

  private getFormControl(controlName: string) {
    if (this.formType === 'student') {
      return this.studentForm.get(controlName);
    } else if (this.formType === 'working') {
      return this.workingForm.get(controlName);
    }
    return null;
  }

  controlInvalid(controlName: string) {
    const control = this.getFormControl(controlName);
    return control?.touched && control?.invalid;
  }

  dateOfBirthControlInvalid(minAge: number, maxAge: number) {
    return this.controlInvalid('dateOfBirth') || (this.age !== undefined && (this.age < minAge || this.age > maxAge));
  }

}
