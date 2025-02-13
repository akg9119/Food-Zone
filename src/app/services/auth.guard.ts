import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (typeof window !== 'undefined' && localStorage.getItem('user')) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
