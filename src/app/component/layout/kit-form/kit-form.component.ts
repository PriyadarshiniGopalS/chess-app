import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ca-kit-form',
  templateUrl: './kit-form.component.html',
  styleUrls: ['./kit-form.component.css']
})
export class KitFormComponent {
  @Input() public kitType: 'none' | 'standard' | 'elite' = 'none';
  kitForm: FormGroup;
  phoneNumberInvalid = false;
  addressInvalid = false;
  kitDetails = "";
  kitPrice = 0;

  constructor(private dialogRef: MatDialogRef<KitFormComponent>, private formBuilder: FormBuilder) {
    this.kitForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      address: ['', Validators.required]
    });
  }

  submit() {
    if (this.kitForm.invalid) {
      this.phoneNumberInvalid = this.kitForm.get('phoneNumber')?.invalid ?? false;
      this.addressInvalid = this.kitForm.get('address')?.invalid ?? false;
    } else {
      this.dialogRef.close();
    }
  }

  closeForm() {
    this.dialogRef.close();
  }
}
