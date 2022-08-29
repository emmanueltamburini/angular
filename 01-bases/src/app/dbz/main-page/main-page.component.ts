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

  public newCharacter: Character = {
    name: 'Trunks',
    power: 14000
  }

  public add (): void {
    console.log(this.newCharacter);
  }

/*   public changeName(event: any) : void {
    console.log(event.target.value)
  } */
}
