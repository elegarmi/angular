import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponseModel, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string ='https://api.giphy.com/v1/gifs';
  private apiKey: string = 'IiMMJIyRc1R9mP9BTw8HHNrSxbNyDurK';
  private limit: number = 10;

  private _history: string[] = [];

  public results: Gif[] = [];

  get history() {
    return [...this._history]
  }

  constructor( private http: HttpClient ) {

    this._history = JSON.parse( localStorage.getItem( "history" )! ) || [];
    this.results = JSON.parse( localStorage.getItem( "results" )! ) || [];

    // if( localStorage.getItem( 'history' )) {
    //   this._history = JSON.parse( localStorage.getItem( 'history' )! );
    // }
  }

  searchGifs( query: string = '' ) {

    query = query.trim().toLowerCase();
    
    if( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice(0, 10);

      localStorage.setItem( 'history', JSON.stringify( this._history ) );
    }

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=IiMMJIyRc1R9mP9BTw8HHNrSxbNyDurK&q=stitch&limit=10')
    //   .then( resp => {
    //     resp.json()
    //       .then( data => {
    //         console.log( data );
    //       })
    //   })

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=IiMMJIyRc1R9mP9BTw8HHNrSxbNyDurK&q=stitch&limit=10');
    // const data = await resp.json();
    // console.log( data );

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit)
      .set('q', query);

    // this.http.get<SearchGifsResponseModel>(`${ this.url }/search?api_key=${ this.apiKey }&q=${ query }&limit=${ this.limit }`)
    this.http.get<SearchGifsResponseModel>(`${ this.url }/search`, { params })
      .subscribe( ( resp ) => {
        this.results = resp.data;

        localStorage.setItem( 'results', JSON.stringify( this.results ) );
      });
  }
}