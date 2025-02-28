import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ca-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent {
  trainers = [
    { name: "Kavin", rating: "PEAK FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Motivated chess instructor with vast teaching experience.", showContent: false },
    { name: "Rishi", rating: "National Player", image: "assets/how-to-play-chess.jpg", description: "A passionate player aiming to share knowledge with the chess community.", showContent: false },
    { name: "Deepak", rating: "Peak FIDE Rating: 1816", image: "assets/how-to-play-chess.jpg", description: "Unrated open tournament expert with immense teaching experience.", showContent: false },
    { name: "Arunachalam", rating: "PEAK FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Dedicated to improving chess skills and strategy.", showContent: false },
    { name: "Vasanth", rating: "PEAK FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "A well-rounded player with deep chess theory knowledge.", showContent: false },
    { name: "Shri Hari", rating: "PEAK FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Passionate about teaching and promoting chess among young players.", showContent: false },
    { name: "Vigneshwaran", rating: "PEAK FIDE RATING: 1578", image: "assets/how-to-play-chess.jpg", description: "Consistent performer in national chess tournaments., showContent: false" }
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