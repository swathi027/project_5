import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // constructor() { }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   autoplay:true,
  //   dots: false,
  //   navSpeed: 0,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     760: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   },
  //   nav: false
  // }
  // testimonials = [
  //   { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe' },
  //   { text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', author: 'Jane Doe' },
  //   // Add more testimonials as needed
  // ];
  showPopup = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showPopup = true;
    }, 5000);
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
