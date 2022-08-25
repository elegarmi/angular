import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // characters: Character[] = [];

  new: Character = {
    name: 'Trunks',
    power: 14000
  };

  // get characters(): Character[] {
  //   this.dbzService.characters;
  // }

  // addNewCharacter(character: Character): void {
  //   // debugger;
  //   this.characters.push(character);
  // }

//   constructor( private dbzService: DbzService ) {
//     this.characters = this.dbzService.characters;
//   }
}
