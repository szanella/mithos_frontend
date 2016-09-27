import { Performance } from '../performances/performance';

export class Customer {
  id: number;
  name: string;
  surname: string;
  performances: Performance[];
}