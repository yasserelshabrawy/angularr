import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

export const guardsGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  if(auth.logedIn()){
    return true
  }else{
    router.navigate(['login']);
    return false
  }
};
