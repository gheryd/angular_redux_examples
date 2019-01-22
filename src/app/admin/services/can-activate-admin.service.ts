import { AuthService } from '../../app-common/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    const user = this.authService.user;
    if (user && user.isAdmin) {
      return true;
    }
    alert('You are not admin!');
    return false;
  }
}
