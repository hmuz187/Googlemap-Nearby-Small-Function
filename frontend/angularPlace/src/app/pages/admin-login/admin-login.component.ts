import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})


export class AdminLoginComponent {

  email: any;
  password: any;


  postLogin() {
    const dataUser = { email: this.email, password: this.password }
    console.log(dataUser)
  }
}
