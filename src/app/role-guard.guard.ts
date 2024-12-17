import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authenticationService } from './services/authenticationService'; // Adjust path if necessary

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(authenticationService); // Inject the AuthentificationService
  const router = inject(Router); // Inject Router for navigation

  //Check if the user has the ROLE_ADMIN role
  if (authService.getRole() === 'ROLE_ADMIN') {
    return true; // Grant access
  }

  // If not, log out the user and redirect to the login page
  authService.logOut();
  router.navigate(['/login']);
  return false;
};
