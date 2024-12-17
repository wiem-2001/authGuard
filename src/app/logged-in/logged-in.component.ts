import { Component } from '@angular/core';
import { authenticationService } from '../services/authenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {
constructor(private authService: authenticationService,private router:Router){
  }

  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
