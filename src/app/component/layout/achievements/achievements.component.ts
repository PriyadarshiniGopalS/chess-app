import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievementsList: any[] = [
    {
      title: 'Chess Championship Win',
      date: new Date('2022-10-20'),
      description: 'Secured the first place in the national chess championship, showcasing exceptional skills and strategy.'
    },
    {
      title: 'Chess Championship Win',
      date: new Date('2022-10-20'),
      description: 'Secured the first place in the national chess championship, showcasing exceptional skills and strategy.'
    },
    {
      title: 'Chess Championship Win',
      date: new Date('2022-10-20'),
      description: 'Secured the first place in the national chess championship, showcasing exceptional skills and strategy.'
    },
    // Add more achievements as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
