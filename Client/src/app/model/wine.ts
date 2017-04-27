import { Winery } from './winery';

export class Wine {
  id: number;
  name: string;
  description: string;
  type: string;
  wineries: Winery[];
}
