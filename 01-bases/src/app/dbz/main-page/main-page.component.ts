import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public chracters: Character[] = [
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
  }

  public add (): void {
    if (this.newCharacter.name.trim().length === 0) { return; }
    this.chracters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0
    }
  }

/*   public changeName(event: any) : void {
    console.log(event.target.value)
  } */
}
