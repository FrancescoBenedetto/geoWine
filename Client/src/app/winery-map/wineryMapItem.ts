import { Winery } from '../model/winery';
import { Wine } from '../model/wine';


export class WineryMapItem extends Winery{

  icon:any;

  constructor(
    winery: Winery,
    icon: any
    )
    {
      super(
      winery.id,
      winery.name,
      winery.nation,
      winery.region,
      winery.latitude,
      winery.longitude,
      winery.address,
      winery.wines
    );

    this.icon=icon;

    }

}
