import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{ title }}</h1>
    <h3>Base: <strong>{{ base }}</strong></h3>

    <button (click)="acc(-base)">-{{ base }}</button>

    <span>{{ counter }}</span>

    <button (click)="acc(base)">+{{ base }}</button>
    `
})
export class CounterComponent {
    title:string = 'App Counter';
    counter:number = 0;
    base:number = 2;

    // add() {
    //   this.counter += 1;
    // }

    // substract() {
    //   this.counter -= 1;
    // }

    acc( value:number ) {
      this.counter += value;
    }
}