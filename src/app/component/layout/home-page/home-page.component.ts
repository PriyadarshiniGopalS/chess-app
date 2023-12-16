import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ca-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('typedText', { static: false }) typedTextElement: ElementRef | undefined;
  isMuted: boolean = true;
  sentences: string[] = [
    "Chess is not a game that requires patience and perseverance to become a skilled player...",
    "We ensure your chess lesson is awesome and impactful....",
    "Chess requires a great deal of creativity and imagination...."
  ];

  currentSentenceIndex: number = 0;

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    this.animateText();
  }
  typeWriter(text: string, index: number, sentenceIndex: number) {
    if (
      this.typedTextElement &&
      this.typedTextElement.nativeElement &&
      index < text.length &&
      sentenceIndex < this.sentences.length
    ) {
      this.typedTextElement.nativeElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => this.typeWriter(text, index, sentenceIndex), 150); // Adjust the typing speed if needed
    } else {
      // Move to the next sentence after completing the typing animation
      setTimeout(() => this.animateText(), 2000); // Delay before starting the next sentence
    }
  }
  
  animateText() {
    if (this.currentSentenceIndex < this.sentences.length) {
      const typedText = this.sentences[this.currentSentenceIndex];
      if (this.typedTextElement && this.typedTextElement.nativeElement) {
        this.typedTextElement.nativeElement.textContent = "";
        this.typeWriter(typedText, 0, this.currentSentenceIndex);
        this.currentSentenceIndex++;
      }
    } else {
      // Reset to the first sentence after completing the round-robin cycle
      this.currentSentenceIndex = 0;
      this.animateText();
    }
  }
}