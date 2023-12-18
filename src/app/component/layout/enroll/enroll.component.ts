import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'ca-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
  providers: [BreakpointObserver]
})
export class EnrollComponent implements OnInit {
  mobileNumber = '+91 9943420844';
  emailAddress = 'whiteknightchessclub.india@gmail.com';
  
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.observeScreenSize();
  }

  observeScreenSize() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe((result: { matches: boolean; }) => {
      this.isSmallScreen = result.matches;
    });
  }
}
