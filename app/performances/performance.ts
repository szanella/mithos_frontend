import { Service } from "../services/service";
import { Customer } from "../customers/customer";

export class Performance {
  service: Service;
  customer: Customer;
  date: Date;
  notes: string;
}