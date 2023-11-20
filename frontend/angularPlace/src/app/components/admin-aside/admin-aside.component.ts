import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-admin-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './admin-aside.component.html',
  styleUrl: './admin-aside.component.scss'
})
export class AdminAsideComponent {

}
