import { Wine } from '../model/wine';

export class WineListItem {

  id: number;
  name: string;
  description: string;
  type: string;
  image: string;

  constructor(
    wine: Wine,
    image: string
    )
    {
      this.id = wine.id;
      this.name = wine.name;
      this.description = wine.description;
      this.type = wine.type;
      this.image = image;
    }
}
