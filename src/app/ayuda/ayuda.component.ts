import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent {

  formatLabel(value: number) {
     if (value >= 1000) {
       return Math.round(value / 1000) ;
     }

    return value;
  }
}
