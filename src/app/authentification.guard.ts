import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authenticationService } from './services/authenticationService'; // Adjust the path if necessary

export const authentificationGuard: CanActivateFn = (route, state) => {
  const authService = inject(authenticationService); // Inject the AuthentificationService
  const router = inject(Router); // Inject the Router for navigation

  // Check if the user is logged in
  if (authService._is_logged()) {
    return true; // Allow access
  } else {
    router.navigate(['/login']); // Redirect to the login page if not logged in
    return false; // Deny access
  }
};
