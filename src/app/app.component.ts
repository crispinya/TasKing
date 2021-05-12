import { Component, OnInit } from '@angular/core';

import { Coche } from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {

  }
  //revisar TODO
  public EstadoCoche:any = EstadoCoche; // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.
  //cambiar todos los valores de los atributos
  public coches:Array<Coche>=[new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),
                              new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),
                              new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO)];
}
