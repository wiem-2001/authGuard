import { Component } from '@angular/core';
import { authenticationService } from '../services/authenticationService';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: authenticationService , private router:Router){
  }
  login(d: any): void {
    this.authService.signin(d).subscribe(
      (response) => {
          const access_token=this.authService.generateToken(response);
          localStorage.setItem('access_token',access_token);
          localStorage.setItem('role',"ROLE_ADMIN");
        }
    );

    // Navigate to the logged-in page after storing the token
    this.router.navigateByUrl('/loggedIn');
  }


}
