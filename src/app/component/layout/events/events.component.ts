import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsList: any[] = [
    {
      title: 'Chess Tournament',
      date: new Date('2023-05-15'),
      location: 'Chess Club Hall',
      description: 'Join us for an exciting chess tournament. Show off your skills and compete for amazing prizes!'
    },
    {
      title: 'Chess Tournament',
      date: new Date('2023-05-15'),
      location: 'Chess Club Hall',
      description: 'Join us for an exciting chess tournament. Show off your skills and compete for amazing prizes!'
    },
    {
      title: 'Chess Tournament',
      date: new Date('2023-05-15'),
      location: 'Chess Club Hall',
      description: 'Join us for an exciting chess tournament. Show off your skills and compete for amazing prizes!'
    },
    {
      title: 'Chess Tournament',
      date: new Date('2023-05-15'),
      location: 'Chess Club Hall',
      description: 'Join us for an exciting chess tournament. Show off your skills and compete for amazing prizes!'
    },
    // Add more events as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
