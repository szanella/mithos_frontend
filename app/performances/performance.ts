import { Service } from "../services/service";
import { Customer } from "../customers/customer";

import { PerformanceJSON } from './performanceJSON';

export class Performance {
  service: Service;
  customer: Customer;
  date: Date;
  notes: string;

  constructor() {
    this.service = new Service();
    this.customer = new Customer();
  }

  toJSON(): PerformanceJSON {
    return Object.assign({}, this, {
      service_id: this.service.id,
      customer_id: this.customer.id,
      date: this.date.toString(),
      customer: undefined,
      service: undefined
    });
  }

  /*fromJSON(json: PerformanceJSON): Performance {
    let performance = new Performance();
    return Object.assign(performance, json, {
      date: new Date(json.date);
    })
  }*/
}