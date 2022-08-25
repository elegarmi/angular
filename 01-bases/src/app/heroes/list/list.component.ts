import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  title:string = 'Heroes List';
  heroes:string[] = ['Hulk', 'Daredevil', 'Captain America', 'Wolverine'];
  heroDeleted:string = '';

  deleteHero() {
    this.heroDeleted = this.heroes.shift() || '';
  }
}
