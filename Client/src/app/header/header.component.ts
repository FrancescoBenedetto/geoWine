import { Component, EventEmitter, Input, Output, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'header-element',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderElementComponent {

  @Input('home') home: true;
  @Output() loginClick = new EventEmitter();

  constructor(private router: Router) {}

  onLoginClick() {
    //console.log('clicked');
    this.loginClick.emit();
  }

  onSearchClick() {
    this.router.navigate(['/search']);
  }
}
