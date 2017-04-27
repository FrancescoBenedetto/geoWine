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
}
