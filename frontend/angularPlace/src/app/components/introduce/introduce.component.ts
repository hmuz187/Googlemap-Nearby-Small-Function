import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

}
