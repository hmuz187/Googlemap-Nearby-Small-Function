import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { AdminAsideComponent } from '../../components/admin-aside/admin-aside.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatIconModule,
    AdminHeaderComponent,
    AdminAsideComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
