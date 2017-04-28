import { Winery } from './winery';

export interface Wine {
  id: number;
  name: string;
  description: string;
  type: string;
  image?: string;
  wineries: Winery[];
}
