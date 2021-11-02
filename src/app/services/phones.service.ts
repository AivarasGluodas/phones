import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Phones} from "../models/phones";
import {PhoneBrands} from "../models/phone-brands";
import {catchError} from "rxjs/operators";

@Injectable()
export class PhonesService {
  phonesUrl: string = 'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json';
  phoneBrandUrl: string = 'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json';

  constructor(private http: HttpClient) { }

  public getAllPhones(): Observable<Phones[]> {
    return this.http.get<Phones[]>(this.phonesUrl).pipe(catchError(this.handleError<Phones[]>('getAllPhones', [])));
  }

  public getAvailablePhoneBrands(): Observable<PhoneBrands>{
    return this.http.get<PhoneBrands>(this.phoneBrandUrl).pipe(catchError(this.handleError<PhoneBrands>('getAllPhones')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
