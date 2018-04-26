import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule, MatToolbarModule, MatCardModule, MatCardTitle, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import { HomeComponent } from './home/home.component';
import { YoutubeService } from './services/youtube.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
