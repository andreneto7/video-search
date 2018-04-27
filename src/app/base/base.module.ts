import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule, MatButtonModule } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';
import { AppService } from './services/app.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DialogComponent]

})
export class BaseModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BaseModule,
      providers: [ AppService ]
    };
  }
}
