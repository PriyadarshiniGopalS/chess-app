import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ca-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {
  trainers = [
    { name: "Kavin", rating: "FIDE RATING: 1881", image: "assets/tutors/kavin.jpeg", description: "Kavin is an Arena Grandmaster, National Instructor, and Senior National Arbiter. He is an experienced chess player and coach who provides clear, structured training for students of all levels. His combined expertise in playing, teaching, and officiating makes him a well-rounded and reliable chess professional.", showContent: false },
    { name: "Rishi", rating: "FIDE RATING: 1766", image: "assets/tutors/rishi.jpeg", description: "Rishi is an Arena Grandmaster, National Instructor, and Senior National Arbiter..", showContent: false },
    { name: "Deepak", rating: "FIDE Rating: 1693", image: "assets/tutors/deepak.jpeg", description: "Unrated open tournament expert with immense teaching experience.", showContent: false },
    // { name: "Arunachalam", rating: "FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Dedicated to improving chess skills and strategy.", showContent: false },
    { name: "Srihari", rating: "FIDE RATING: 1874", image: "assets/tutors/srihari.jpeg", description: "Passionate about teaching and promoting chess among young players.", showContent: false },
    // { name: "Vigneshwaran", rating: "FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Consistent performer in national chess tournaments., showContent: false" }
  ];

  currentIndex: number = 0;
  trainersPerSlide: number = 3; // Default to 3 for large screens
  totalPages: number = Math.ceil(this.trainers.length / this.trainersPerSlide);

  constructor() {
    this.updateTrainersPerSlide();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateTrainersPerSlide();
  }

  updateTrainersPerSlide() {
    this.trainersPerSlide = window.innerWidth < 768 ? 1 : 3; // 1 trainer per slide on small screens, 3 on larger screens
    this.totalPages = Math.ceil(this.trainers.length / this.trainersPerSlide);
    if (this.currentIndex >= this.totalPages) {
      this.currentIndex = Math.max(this.totalPages - 1, 0);
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.totalPages - 1) {
      this.currentIndex++;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  showContent(index: number) {
    this.trainers[index].showContent = true;
  }

  hideContent(index: number) {
    this.trainers[index].showContent = false;
  }
}