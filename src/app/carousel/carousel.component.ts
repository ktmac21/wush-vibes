import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') carouselRef!: ElementRef;

  carouselItems!: HTMLElement[];
  position!: number;

  ngOnInit() {
    this.position = 0;
    if (this.carouselRef.nativeElement) {
      this.carouselItems = Array.from(this.carouselRef.nativeElement.querySelectorAll('.carousel-item'));
    }
  }
  

  nextSlide() {
    this.position -= 100;
    this.carouselRef.nativeElement.style.transform = `translateX(${this.position}%)`;

    // Reset position when reaching the end
    if (this.position < -((this.carouselItems.length - 1) * 100)) {
      this.position = 0;
      this.carouselRef.nativeElement.style.transform = `translateX(${this.position}%)`;
    }
  }

  prevSlide() {
    this.position += 100;
    this.carouselRef.nativeElement.style.transform = `translateX(${this.position}%)`;

    // Loop back to the end when reaching the start
    if (this.position > 0) {
      this.position = -((this.carouselItems.length - 1) * 100);
      this.carouselRef.nativeElement.style.transform = `translateX(${this.position}%)`;
    }
  }
}
