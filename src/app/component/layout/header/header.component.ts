import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobileNumber = '123-456-7890';
  emailAddress = 'example@example.com';
  
  constructor() { }

  ngOnInit(): void {
  }

}
