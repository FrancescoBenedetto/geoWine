import { Wine } from './wine';

export class Winery {
  id: number;
  name: string;
  nation: string;
  region: string;
  latitude: number;
  longitude: number;
  address: string;
  wines: Wine[];

  constructor(
    id: number,
    name: string,
    nation: string,
    region: string,
    latitude: number,
    longitude: number,
    address: string,
    wines: Wine[])
    {
      this.id = id;
      this.name=name;
      this.nation= nation;
      this.region=region;
      this.latitude=latitude;
      this.longitude=longitude;
      this.address=address;
      this.wines=wines;
    }
}
