import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // List of images inside src/assets/gallery folder
    const totalImages = 171;
    const imageNames = Array.from({ length: totalImages }, (_, i) => `image (${i + 1}).jpg`);
    this.images = imageNames.map(name => `assets/gallery/${name}`);
  }

}
