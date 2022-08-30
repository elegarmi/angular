import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent {

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  constructor( private countriesService: CountriesService ) { }

  search( term: string ) {
    this.hasError = false;
    this.term = term;
    this.showSuggested = false;

    this.countriesService.searchCountry( term )
      // .subscribe( 
      //   resp => {
      //     console.log( resp );
      //   }, 
      //   err => {
      //     this.hasError = true;
      //   }
      // );
      .subscribe({ 
        next: countries => (
          console.log( countries[1] ),
          this.countries = countries
        ),
        error: err => (
          this.hasError = true,
          this.countries = []
        )
      });
  }

  suggest( term: string ) {
    this.hasError = false;
    this.term = term;
    this.showSuggested = true;
    
    this.countriesService.searchCountry( term )
      .subscribe({ 
        next: countries => this.suggestedCountries = countries.splice(0, 3),
        error: err => (
          this.hasError = true, 
          this.suggestedCountries = []
        )
      });
  }

  searchSuggested( term: string ) {
    this.search( term );
  }
}