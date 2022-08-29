import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(  ({ id }) => {
    //     console.log( id )

    //     this.countriesService.getCountryByAlpha( id )
    //       .subscribe( country => {
    //         console.log( country )
    //       });
    //   })

    this.activatedRoute.params
      .pipe( 
        switchMap( ({ id }) => this.countriesService.getCountryByAlpha( id )),
        // tap( resp => console.log( resp) )
        tap( console.log )
      )
      .subscribe( country => (
        console.log( country[0] ),
        this.country = country[0]
      ));
  }
}