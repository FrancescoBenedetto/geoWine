import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'winery-search-home',
  templateUrl: './winery-search-header.component.html',
  styleUrls: ['./winery-search-home.component.css']
})


export class WinerySearchHomeComponent {

  @Output() aButtonClicked = new EventEmitter<void>();

  constructor() {}

  triggerAButtonClickedEvent() {
    this.aButtonClicked.emit();
  }

}
