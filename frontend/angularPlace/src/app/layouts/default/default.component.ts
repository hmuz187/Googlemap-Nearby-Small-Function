import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../components/component.module';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    ComponentModule
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
