import { Injectable }       from '@angular/core';
import { Http, Headers}     from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Performance } from './performance';

@Injectable()
export class PerformancesService {
  private performancesUrl: string = 'http://localhost:3001/api/performances';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  savePerformance(performance: Performance): Promise<Performance> {
    return this.http
      .post(this.performancesUrl, JSON.stringify(performance), {headers: this.headers})
      .toPromise()
      .then(response => response.json().performance as Performance)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error in PerformancesService', error);
    return Promise.reject(error.message || error);
  }
}