import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="accumulate(base)"> +{{base}} </button>
    <span>{{numberValue}}</span>
    <button (click)="accumulate(-base)"> -{{base}} </button>

  `
})
export class CounterComponent {
  public title: string = 'Counter app';
  public numberValue: number = 10;
  public base: number = 5;

  accumulate(valor:number) : void {
      this.numberValue += valor;
  }
}
