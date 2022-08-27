import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent {

  public heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captian America'];
  public deletedHero: string = '';

  public deleteHereo(): void {
    this.deletedHero = this.heroes.shift() || '';
  }

}
