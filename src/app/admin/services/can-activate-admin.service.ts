import { AppAction } from './../../services/actions';
import { AuthService } from '../../app-common/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate {

  constructor(private authService: AuthService, private appAction: AppAction) { }

  canActivate(): boolean {
    const user = this.authService.user;
    if (user && user.isAdmin) {
      this.appAction.log('can activate admin content');
      return true;
    }
    this.appAction.log('You are not admin!');
    return false;
  }
}
