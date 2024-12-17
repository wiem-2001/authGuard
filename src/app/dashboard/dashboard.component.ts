import { Component } from '@angular/core';
import { authenticationService } from '../services/authenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private authService: authenticationService,private router:Router){
  }

  logout(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
