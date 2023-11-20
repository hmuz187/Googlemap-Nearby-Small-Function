import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  email: any;
  password: any;


  postSignUp() {
    const dataUser = { email: this.email, password: this.password }
    console.log(dataUser)
  }
}
