import { Injectable }       from '@angular/core';
import { Http, Response}    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';

@Injectable()
export class CustomersService {
  private customersUrl: string = 'http://localhost:3001/api/customers';

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http
      .get(this.customersUrl)
      .toPromise()
      .then(response => response.json().customers as Customer[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error in CustomersService', error);
    return Promise.reject(error.message || error);
  }
}