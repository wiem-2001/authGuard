import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authenticationService {
  users: User[] = [];
  URL = 'http://localhost:3000/User';
    constructor(private http: HttpClient) {}


    signin(data: any): Observable<User> {
      return this.http.post<User>(this.URL, data);
    }


  logOut(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
  }
  getRole(){
    const userRole = localStorage.getItem('role');
    return userRole;
  }
  _is_logged(): boolean {
    return !!localStorage.getItem('access_token');
    }




 generateToken(user: User): string {
    // Simulate a JWT (in a real scenario, you would use a library)
    return btoa(JSON.stringify({ user:user})); // Base64 encode for simplicity
}

}
