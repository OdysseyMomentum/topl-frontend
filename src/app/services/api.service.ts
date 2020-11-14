import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHTTPHeaders(): HttpHeaders {
    const result = new HttpHeaders();
    result.set('Content-Type', 'application/json');
    return result;
  }

  // validate response from server (check for error and console status)
  validateResponse(response: any, request: string): any {
    console.log(response);
    if (response) {
      console.log(`Loaded ${request}`);
      console.log(response);
      return true;
    } else {
      console.log(`Failed loading ${request}`);
      console.log(response);
      return false;
    }
  }

  Request(resource: string): any {
    return this.http.get<any>(environment.apiUrl + resource, { headers: this.getHTTPHeaders() })
      .pipe(
        map((result: any) => {
          return result;
        }),
        catchError(err => {
          console.log('error', err);
          return Observable.throw(false);
        })
      );
  }
}
