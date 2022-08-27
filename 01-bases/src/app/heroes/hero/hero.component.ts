import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  public title: string = 'Counter app';
  public numberValue: number = 10;
  public base: number = 5;

  accumulate(valor:number) : void {
      this.numberValue += valor;
  }
}
