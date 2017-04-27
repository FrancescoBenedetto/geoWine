import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Winery } from '../model/winery';
import { WineryListItem } from './wineryListItem';


@Component({
  selector: 'winery-list-element',
  templateUrl: './winery-list-element.component.html',
  styleUrls: ['./winery-list-element.component.css']
})

export class WineryListElementComponent {

  @Output() mouseOvered = new EventEmitter<number>();
  @Output() mouseOut = new EventEmitter<number>();
  wineryListItem: WineryListItem;

  @Input()
  set winery(winery: Winery) {
    if ( winery == null ) { return; }
    this.wineryListItem = new WineryListItem(winery);
  }

  onMouseOver() {
    this.mouseOvered.emit(this.winery.id);
  }

  onMouseOut() {
    this.mouseOut.emit(this.winery.id);
  }

}
