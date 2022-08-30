import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
})
export class RegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];
  term: string = '';
  hasError: boolean = false;

  constructor( private countriesService: CountriesService ) { }

  // getClass( region: string ) {
  //   (region === this.regionActive) ? 'btn-primary' : 'btn-outline-primary'
  // }

  activateRegion( term: string ) {
    if( term === this.regionActive ) { return; }

    this.hasError = false;
    this.regionActive = term;
    this.term = term;
    this.countries = [];

    this.countriesService.searchRegion( term )
    .subscribe({
      next: countries => this.countries = countries,
      error: error => (
        this.hasError = true,
        this.countries = []
      )
    });
  }

  // search( term: string ) {
  //   this.hasError = false;
  //   this.term = term;
  //   this.countries = [];

  //   this.countriesService.searchRegion( term )
  //     .subscribe({
  //       next: countries => this.countries = countries,
  //       error: error => (
  //         this.hasError = true,
  //         this.countries = []
  //       )
  //     });
  // }
}