import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AppService } from './services/app.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

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
