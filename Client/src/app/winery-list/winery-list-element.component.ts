import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Winery } from '../model/winery';


@Component({
  selector: 'winery-list-element',
  templateUrl: './winery-list-element.component.html',
  styleUrls: ['./winery-list-element.component.css']
})


export class WineryListElementComponent {

  @Output() mouseOver = new EventEmitter<number>();
  @Output() mouseOut = new EventEmitter<number>();
  baseImgsPath: string = 'src/assets/images/wineries/';
  _winery: Winery;

  @Input()
  set winery(winery: Winery) {
    if ( winery == null ) { return; }
    this._winery = winery;
    this._winery.image = this.baseImgsPath + '/' + this._winery.id + '/logo.jpg';
    this._winery.wines.map(wine => wine.image = this.baseImgsPath + this._winery.id + '/' + wine.id + '.jpg');
  }

  onMouseOver() {
    this.mouseOver.emit(this._winery.id);
  }

  onMouseOut() {
    this.mouseOut.emit(this._winery.id);
  }

}
