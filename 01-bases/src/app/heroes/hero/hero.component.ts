import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 45;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  public getInfo(): string {
      return `${this.name} - ${this.age}`
  }

  public changeName(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }
}
