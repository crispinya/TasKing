import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-tarea-personalizada',
  templateUrl: './tarea-personalizada.component.html',
  styleUrls: ['./tarea-personalizada.component.scss']
})
export class TareaPersonalizadaComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
