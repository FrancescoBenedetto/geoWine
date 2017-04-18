import { Wine } from './wine';

export class Winery {
  id: number;
  name: string;
  wine_description: string;
  nation: string;
  region: string;
  wines: Wine[];
}
