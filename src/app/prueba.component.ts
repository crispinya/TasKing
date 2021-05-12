import { Component } from '@angular/core';

@Component({
  selector: 'selectorprueba',
  template: `
  <h1>Hola prueba 1</h1>
  <hr>
  <h2> Prueba salto de línea</h2>
  `,
  styles: ['h1 {color:red;} hr {height:20px;} h2 {color:green;}']
})

export class Prueba{

}
