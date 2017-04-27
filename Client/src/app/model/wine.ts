import { Winery } from './winery';

export interface Wine {
  id: number;
  name: string;
  description: string;
  type: string;
  wineries: Winery[];
}
