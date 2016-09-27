import { Injectable }       from '@angular/core';
import { Http, Headers}     from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';

@Injectable()
export class CustomersService {
  private customersUrl: string = 'http://localhost:3001/api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCustomer(id: number): Promise<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().customer as Customer)
      .catch(this.handleError);
  }

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get(this.customersUrl)
      .toPromise()
      .then(response => response.json().customers as Customer[])
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customersUrl, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(response => response.json().customer as Customer)
      .catch(this.handleError);
  }

  update(customer: Customer): Promise<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http
      .put(url, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(response => response.json().customer as Customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error in CustomersService', error);
    return Promise.reject(error.message || error);
  }
}