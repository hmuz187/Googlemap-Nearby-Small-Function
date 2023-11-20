import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { environment } from '../environment/environment'




import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GooglemapComponent } from './pages/googlemap/googlemap.component';
import { SearchMapComponent } from './pages/search-map/search-map.component';
import { FullcontentComponent } from './pages/fullcontent/fullcontent.component';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent, 
    FooterComponent,
    SidebarComponent,
    HeroComponent,
    GooglemapComponent,
    SearchMapComponent,
    FullcontentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularPlace';

  googleMapsApiKey=environment.googleMapsApiKey;
}
