import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 45;
  public getInfo(): string {
      return `${this.name} ${this.age}`
  }

  get nameCapitalized() {
    return this.name.toUpperCase();
  }
}
