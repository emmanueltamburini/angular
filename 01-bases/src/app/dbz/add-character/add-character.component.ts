import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

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

  @Output('onNewCharacter')
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public add (): void {
    if (this.newCharacter.name.trim().length === 0) { return; }

    console.log(this.newCharacter);

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
