import { delay } from 'rxjs/internal/operators';
import { UserAuthI, UserTokenI, UserI } from './../models/user';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private users: UserAuthI[] = [
    { username: 'user1', password: 'user1pwd', isAdmin: false }
    , { username: 'user2', password: 'user2pwd', isAdmin: true }
  ]

  private static TOKEN: string = "token";
  private isUserLoggedIn = new BehaviorSubject<boolean>(this.checkLoggedIn())

  constructor() {
    window.addEventListener("storage", this.localStorageListener.bind(this));
  }

  private localStorageListener(e) {    
      const userToken: UserTokenI = this.getUserToken();
      if (userToken && e.key==AuthService.TOKEN && !this.checkLoggedIn()) {
        localStorage.removeItem(AuthService.TOKEN);
        this.isUserLoggedIn.next(false);
        
      } else if (!userToken) {
        this.isUserLoggedIn.next(false);
      }

  }

  ngOnDestroy() {
    window.removeEventListener("storage", this.localStorageListener.bind(this));
  }

  doAuth(userAuth: UserAuthI): Observable<UserI> {
    const user = this.users.find(
      (u) => userAuth.username == u.username && userAuth.password == u.password
    )
    if (user) {
      const userToken: UserTokenI = this.generateUserToken(user)
      localStorage.setItem(AuthService.TOKEN, this.serializeUserToken(userToken));
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
    return of(user).pipe(delay(2000));
  }

  private checkLoggedIn(): boolean {
    
    const userToken: UserTokenI = this.getUserToken();
    
    let isLogged: boolean;
    if (userToken) {
      const isExpired = new Date().getTime() > userToken.expireTime;
      if(isExpired){
        localStorage.removeItem(AuthService.TOKEN);
      }
      isLogged = !isExpired;
    } else {
      isLogged = false;
    }
    return isLogged;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isUserLoggedIn.asObservable();
  }

  get user():UserI {
    return <UserI>this.getUserToken();
  }

  doLogout() {
    localStorage.removeItem(AuthService.TOKEN);
    this.isUserLoggedIn.next(false);
  }

  private generateUserToken(user: UserI): UserTokenI {
    return <UserTokenI>Object.assign({}, user, {
      expireTime: (new Date()).getTime() + 1000 * 60 * 60
    });
  }

  private serializeUserToken(userToken: UserTokenI): string {
    return JSON.stringify(userToken);
  }

  private getUserToken(): UserTokenI {
    const token: string = localStorage.getItem(AuthService.TOKEN);
    const userToken: UserTokenI = JSON.parse(token);
    return userToken;
  }

}
