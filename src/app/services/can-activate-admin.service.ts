import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate():boolean{
    console.log("can activate admin");
    const user = this.authService.user;
    if(user && user.isAdmin){
      return true;
    }
    return false;
  }
}
