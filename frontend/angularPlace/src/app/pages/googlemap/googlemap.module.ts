import {NgModule} from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';

import {GooglemapComponent} from './googlemap.component';

@NgModule({
  imports: [
    GoogleMapsModule,
  ],
  declarations: [GooglemapComponent],
})
export class GooglemapModule {
}