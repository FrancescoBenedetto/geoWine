import { Component, Input, OnInit } from '@angular/core';
import { Winery } from '../model/winery';

@Component({
  selector: 'winery-list-element',
  templateUrl: './winery-list-element.component.html',
  styleUrls: ['./winery-list-element.component.css']
})

export class WineryListElementComponent implements OnInit {

  @Input('winery') winery: Winery;
  imgsBasePath: string = 'src/assets/images/wineries/';
  wineryLogo: string;
  wineImgs: string[];

  ngOnInit() {
    let thisImgsBasePath: string = this.imgsBasePath + + this.winery.id+ '/';
    this.wineryLogo = thisImgsBasePath + 'logo.jpg';
    this.wineImgs = this.winery.wines
      .map(wine => thisImgsBasePath + wine.id + '.jpg');
  }

}
