import { Wine } from './wine';

export interface Winery {
  id: number;
  name: string;
  nation: string;
  region: string;
  latitude: number;
  longitude: number;
  address: string;
  wines: Wine[];
}
