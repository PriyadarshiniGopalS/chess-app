import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Tile } from '../model/tile.interface';

@Component({
  selector: 'ca-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
  providers: [BreakpointObserver]
})
export class EnrollComponent implements OnInit {
  tiles: Tile[] = [
    {
      icon: 'assets/how-to-play-chess.jpg',
      title: 'Enroll in Chess Class',
      description1: 'Ready to master the game? Enroll in our chess class and enhance your skills with expert guidance.',
      description2: 'Join our interactive classes and become a chess champion!',
      buttonLink: '#',
      buttonText: 'Enroll Now'
    },
    {
      icon: 'assets/chess-kit.jpg',
      title: 'Basic Chess Kit',
      description1: 'Get started with the essentials! Our basic chess kit includes everything you need to kickstart your chess journey.',
      description2: 'Equip yourself with the tools to become a chess enthusiast.',
      buttonLink: '#',
      buttonText: 'Get Kit'
    },
    {
      icon: 'assets/tournament.jpg',
      title: 'Chess Tournament Registration',
      description1: 'Compete against the best in our upcoming chess tournament. Register now to showcase your skills and win exciting prizes!',
      description2: 'Challenge yourself and participate in the ultimate chess showdown.',
      buttonLink: '#',
      buttonText: 'Register'
    }
  ];

  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.observeScreenSize();
  }

  observeScreenSize() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe((result: { matches: boolean; }) => {
      this.isSmallScreen = result.matches;
    });
  }

  public open(): void {
    const dialogRef = this.dialog.open(ChessAdmissionDialogComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
