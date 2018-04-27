import { DialogComponent } from './../dialog/dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable()
export class AppService {

  constructor(public dialog: MatDialog) { }

  showMessage(title: string, message: string, type: number){
    return this.dialog.open(DialogComponent, {data:{title: title, message: message}, width: '300px'});
  }

}
