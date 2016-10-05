import { Injectable }       from '@angular/core';
import { Http, Headers}     from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Service } from './service';

@Injectable()
export class ServicesService {
  private servicesUrl: string = 'http://localhost:3001/api/services';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getServices(): Promise<Service[]> {
    return this.http
      .get(this.servicesUrl)
      .toPromise()
      .then(response => response.json().services as Service[])
      .catch(this.handleError);
  }

private handleError(error: any): Promise<any> {
  console.error('Error in ServicesService', error);
return Promise.reject(error.message || error);
}
}