import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ca-kit-form',
  templateUrl: './kit-form.component.html',
  styleUrls: ['./kit-form.component.css']
})
export class KitFormComponent implements OnInit {
  @Input() public kitType: 'none' | 'standard' | 'elite' = 'none';
  @Input() public description: { [key: string]: string } = {};
  @Input() public price = 0;
  @Input() public imageUrls: string[] = [];

  standardForm: FormGroup;
  currentImageIndex = 0;
  totalPrice = 0;

  constructor(private dialogRef: MatDialogRef<KitFormComponent>, private formBuilder: FormBuilder) {
    this.standardForm = this.formBuilder.group({
      quantity: [1, [Validators.required]],
      price: [],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      address: this.formBuilder.group({
        doorNumber: [null, [Validators.required]],
        street: [null, [Validators.required]],
        city: [null, [Validators.required]],
        state: [null, [Validators.required]],
        landmark: [null],
        zip: [null, [Validators.required, Validators.pattern('[0-9]*')]]
      })
    });
  }

  ngOnInit(): void {
    this.standardForm.get('description')?.setValue(this.description);
    this.standardForm.get('price')?.setValue(this.price);
    this.totalPrice = this.price;
  }

  submit() {
    if (this.standardForm.invalid) {
      this.standardForm.markAllAsTouched();
    } else {
      this.dialogRef.close();
    }
  }

  closeForm() {
    this.dialogRef.close();
  }

  get currentImage(): string {
    return this.imageUrls[this.currentImageIndex];
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.imageUrls.length - 1; // Loop back to the last image
    }
  }

  nextImage(): void {
    if (this.currentImageIndex < this.imageUrls.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  calculatePrice(): void {
    const quantity = this.standardForm.get('quantity')?.value;
    this.totalPrice = (quantity > 0 ? quantity : 0) * this.price;
  }

  controlInvalid(controlName: string) {
    const control = this.getFormControl(controlName);
    return control?.touched && control?.invalid;
  }
  
  private getFormControl(controlName: string) {
    if (this.kitType === 'standard') {
      return this.standardForm.get(controlName);
    } else if (this.kitType === 'elite') {
      return this.standardForm.get(controlName);
    }
    return null;
  }
}
