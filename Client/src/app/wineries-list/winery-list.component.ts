import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Winery } from '../model/winery';

@Component({
  selector: 'winery-list',
  templateUrl: './winery-list.component.html',
  styleUrls: ['./winery-list.component.css']
})

export class WineryListComponent {

  constructor() {}

   @Input('wineries') wineries: Winery[];

  getWineries(): Winery[] {
    return this.wineries;
  }

}
