import { Injectable }       from '@angular/core';
import { Http, Headers}     from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';

@Injectable()
export class CustomersService {
  private customersUrl: string = 'http://localhost:3001/api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get(this.customersUrl)
      .toPromise()
      .then(response => response.json().customers as Customer[])
      .catch(this.handleError);
  }

  saveCustomer(customer: Customer): Promise<Customer> {
    return this.http
      .post(this.customersUrl, JSON.stringify(customer), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error in CustomersService', error);
    return Promise.reject(error.message || error);
  }
}