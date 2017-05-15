import { Component, EventEmitter, Input, Output, NgZone } from '@angular/core';


@Component({
  selector: 'header-element',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderElementComponent {

  @Input('home') home: true;
  
  constructor() {}

}
