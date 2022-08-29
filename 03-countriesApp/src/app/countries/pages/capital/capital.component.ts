import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
})
export class CapitalComponent {

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  placeholder: string = 'Search by capital';

  constructor( private countriesService: CountriesService ) { }

  search( term: string ) {
    this.hasError = false;
    this.term = term;

    this.countriesService.searchCapital( term )
      .subscribe({
        next: countries => this.countries = countries,
        error: error => (
          this.hasError = true,
          this.countries = []
        )
      });
  }
}