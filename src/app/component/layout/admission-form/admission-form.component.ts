import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  formData: any = {};

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    console.log("Form submitted with data:", this.formData);
    // You can perform further actions here, such as sending the form data to a server
    // or navigating to another page.
  }

}
