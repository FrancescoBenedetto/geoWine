import { Winery } from './winery';

export class Wine {
  id: number;
  name: string;
  description: string;
  type: string;
  wineries: Winery[];

  constructor(
    id: number,
    name: string,
    description: string,
    type: string,
    wineries: Winery[]){
    this.id = id;
    this.name = name;
    this.description=description;
    this.type=type;
    this.wineries=wineries;
  }
}
