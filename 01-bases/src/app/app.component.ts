import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hola Mundo template</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Counter app';
  public numberValue: number = 10;

  accumulate(valor:number) : void {
      this.numberValue += valor;
  }

/*   add () : void {
      this.numberValue++; 
  }

  subtract () : void {
    this.numberValue--; 
  } */
}
