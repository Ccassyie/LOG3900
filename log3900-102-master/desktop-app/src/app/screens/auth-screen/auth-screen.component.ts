import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.component.html',
  styleUrls: ['./auth-screen.component.sass'],
})
export class AuthScreenComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebookSquare = faFacebookSquare;
  leftCarouselIcon = faChevronLeft;
  rightCarouselIcon = faChevronRight;
  carouselImages = [
    {
      link: 'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'carousel-image-1',
    },
    {
      link: 'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'carousel-image',
    },
    {
      link: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'carousel-image-3',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  auth(): void {
    this.router.navigate(['drawing-screen']);
  }
}
