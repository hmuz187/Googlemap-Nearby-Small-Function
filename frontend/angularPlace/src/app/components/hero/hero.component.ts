import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
	imports: [CommonModule,NgbCarouselModule, NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  providers: [HeroComponent ]
})
// export class HeroComponent {
  
// }

export class HeroComponent {
	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}