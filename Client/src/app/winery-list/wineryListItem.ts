import { Winery } from '../model/winery';
import { Wine } from '../model/wine';
import { WineListItem } from './wineListItem';

const baseImgsPath = 'src/assets/images/wineries/';

export class WineryListItem {

  image: string;
  id: number;
  name: string;
  wines: WineListItem[];

  constructor(
    winery: Winery
    //image: string
    )
    {
      this.id = winery.id;
      this.name = winery.name;
      this.image=baseImgsPath + this.id + '/logo.jpg';
      this.wines = winery.wines.map(wine=>new WineListItem(
        wine,
        baseImgsPath + winery.id + '/' + wine.id + '.jpg'
      ));
    }

}
