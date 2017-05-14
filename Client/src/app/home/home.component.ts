import { Component, EventEmitter, Input, Output, NgZone } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeElementComponent {

  imgHeight: string;
  imgWidth: string;
  width: number;
  height: number;

  constructor(private ngZone: NgZone, private router: Router) {
    window.onload = (e) =>
    {
        ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.imgHeight = (this.height) + 'px';
            this.imgWidth = (this.width) + 'px';
        });
    };
  }

  redirect() {
    this.router.navigate(['/search']);
  }

}
