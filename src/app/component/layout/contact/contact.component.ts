import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mobileNumber = '+91 9943420844';
  emailAddress = 'whiteknightchessclub.india@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
