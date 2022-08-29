import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  public addNewCharecter (currentCharacter: Character): void {
    if (currentCharacter.name.trim().length === 0) { return; }
    this.characters.push(currentCharacter);
  }


  constructor (private dbzService: DbzService) {
    
  }
}
