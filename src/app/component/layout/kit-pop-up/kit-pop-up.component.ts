import { Component } from '@angular/core';

@Component({
  selector: 'app-kit-pop-up',
  templateUrl: './kit-pop-up.component.html',
  styleUrls: ['./kit-pop-up.component.css']
})
export class KitPopUpComponent {
  kitType: 'none' | 'standard' | 'elite' = 'none';
  imageUrls: string[] = [];
  description: { [key: string]: string } = {};
  price = 0;
  
  setKitType(type: 'standard' | 'elite') {
    if (type === 'standard') {
      this.setStandardKitDetails();
    } else {
      this.setEliteKitDetails();

    }

    this.kitType = type;
  }

  private setStandardKitDetails() {
    this.imageUrls = ['assets/standard-kit/chess-board-mat.jpg', 'assets/standard-kit/mat-and-coins.jpg', 'assets/standard-kit/mat-and-coins-full-view.jpg'];
    this.description = {
      Material: 'Vinyl',
      Colour: 'Green and White',
      'Item Weight': '150 g',
      'Board Dimension': '17 X 17 inches',
      'Coins Dimension': '5 X 5 X 5 cm'
      };
    this.price = 50;
  }

  private setEliteKitDetails() {
    this.imageUrls = ['assets/elite-chess-board.jpg', 'assets/elite-chess-pieces.jpg', 'assets/elite-chess-clock.jpg', 'assets/elite-chess.jpg'];
    this.description = {
      board: 'A standard chess board',
      coins: 'A set of chess coins'
    };
    this.price = 100;
  }
}
