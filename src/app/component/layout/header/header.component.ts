import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'ca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BreakpointObserver]
})
export class HeaderComponent implements OnInit {
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
