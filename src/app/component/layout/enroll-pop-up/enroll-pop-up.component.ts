import { Component } from '@angular/core';

@Component({
  selector: 'ca-pop-up',
  templateUrl: './enroll-pop-up.component.html',
  styleUrls: ['./enroll-pop-up.component.css']
})
export class EnrollPopUpComponent {
  formType: 'none' | 'student' | 'working' = 'none';
}
