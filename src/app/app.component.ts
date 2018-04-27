import { Component } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import { routerTransition } from './transitions/router.transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ]
})
export class AppComponent {
  title = 'VideoSearch';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
