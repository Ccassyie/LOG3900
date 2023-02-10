import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-drawing-screen',
  templateUrl: './drawing-screen.component.html',
  styleUrls: ['./drawing-screen.component.sass'],
})
export class DrawingScreenComponent implements OnInit {
  faCircle = faCircle;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  toAlbums(): void {
    this.router.navigate(['albums-screen']);
  }
  toAccountScreen(): void {
    this.router.navigate(['account-screen']);
  }
}
