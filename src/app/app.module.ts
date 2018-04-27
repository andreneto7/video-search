import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule, MatToolbarModule, MatCardModule, MatCardTitle, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { HomeComponent } from './home/home.component';
import { YoutubeService } from './services/youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseModule } from './base/base.module';
import { AppService } from './base/services/app.service';
import { DialogComponent } from './base/dialog/dialog.component';

const appRoutes: Routes = [
  { path: 'watch', component: WatchComponent },
  { path: 'watch/:id', component: WatchComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BaseModule,
    BrowserAnimationsModule
  ],
  providers: [YoutubeService, AppService],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
