import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams()
      .set( 'fields', 'name,capital,population,flags,cca2,independent');
  }

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ term }`;

    return this.http.get<Country[]>( url, { params: this.httpParams })
            // .pipe(
            //   catchError( err => of([]) )
            // );
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

  searchRegion( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/region/${ term }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
      // .pipe(
      //   tap( console.log )
      // )
  }

  getCountryByAlpha( id: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/alpha/${ id }`;

    return this.http.get<Country[]>( url )
  }
}
