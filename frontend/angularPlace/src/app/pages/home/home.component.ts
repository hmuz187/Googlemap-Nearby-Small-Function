import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


//call app service
import { AppService } from '../../app.service'
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IntroduceComponent } from '../../components/introduce/introduce.component';
import { BasicmapComponent } from '../../components/basicmap/basicmap.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    IntroduceComponent,
    BasicmapComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private service: AppService, private router: Router) { }
}

