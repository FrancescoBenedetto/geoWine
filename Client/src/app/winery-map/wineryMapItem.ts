import { Winery } from '../model/winery';

  const  baseImgUrl = 'src/assets/images/map/';

export class WineryMapItem {

  id: number;
  latitude: number;
  longitude: number;
  icon: any;

  constructor(
    winery: Winery
    // icon: any
  ) {
    this.id = winery.id;
    this.latitude = winery.latitude;
    this.longitude = winery.longitude;
    this.icon = {
            url: baseImgUrl + 'wine_icon.svg',
            scaledSize: {
              height: 35,
              width: 30
            }
          };
  }

  highlight(): void {
    this.icon = {
            url: baseImgUrl + 'wine_icon_highlighted.png',
            scaledSize: {
              height: 35,
              width: 30
            }
          };
  }

  reset(): void {
    this.icon = {
            url: baseImgUrl + 'wine_icon.svg',
            scaledSize: {
              height: 35,
              width: 30
            }
          };
  }
}
