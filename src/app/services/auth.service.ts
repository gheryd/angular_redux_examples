import { delay } from 'rxjs/internal/operators';
import { UserAuthI, UserTokenI, UserI } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: UserAuthI[] = [
      {username:'user1', password:'user1pwd'}
      ,{username:'user2', password: 'user2pwd'} 
    ]

  private isUserLoggedIn = new BehaviorSubject<boolean>(this.checkLoggedIn())

  constructor() { 
    
  }

  doAuth(userAuth:UserAuthI):Observable<UserI>{
    const user = this.users.find(
      (u) => userAuth.username==u.username && userAuth.password==u.password
    )
    console.log("user",user);
    if(user){
      const userToken:UserTokenI = this.generateUserToken(user)
      localStorage.setItem("token", this.serializeUserToken(userToken));
      this.isUserLoggedIn.next(true);
    }else {
      this.isUserLoggedIn.next(false);
    }
    return of(user).pipe(delay(2000));
  }

  private checkLoggedIn():boolean{
    const userToken:UserTokenI = this.getUserToken();
    
    const isLogged:boolean = !!userToken && new Date().getTime()<userToken.expireTime;
    console.log("checkLoggedIn", isLogged);
    return isLogged;
  }

  isLoggedIn():Observable<boolean>{
    return this.isUserLoggedIn.asObservable();
  }

  doLogout(){
    localStorage.removeItem('token');
    this.isUserLoggedIn.next(false);
  }

  private generateUserToken(user:UserI):UserTokenI{
    return {username:user.username, expireTime:(new Date()).getTime()+1000*60*60}
  }

  private serializeUserToken(userToken:UserTokenI):string{
    return JSON.stringify(userToken);
  }

  private getUserToken():UserTokenI{
    const token:string = localStorage.getItem('token');
    const userToken:UserTokenI = JSON.parse(token);
    return userToken;
  }
}
