import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  @Input('newCharacter')
  public newCharacter: Character = {
    name: '',
    power: 0
  };

  constructor (private dbzSerivice: DbzService) {}

  public add (): void {
    if (this.newCharacter.name.trim().length === 0) { return; }
    this.dbzSerivice.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
