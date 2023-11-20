import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

 

  email: any; 
  password: any; 


  postLogin () {
    const dataUser = {email: this.email, password: this.password}
    console.log(dataUser)
  }
}