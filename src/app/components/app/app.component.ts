import { AuthService } from '../../app-common/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {select} from 'ng2-redux';
import { Observable, of } from 'rxjs';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu: {title: string, path: any}[] =
    [
      {title: 'home', path: '/'}
      , {title: 'authorized content (CanActivate)', path: '/authorized'}
      , {title: 'admin content (CanActivate)', path: '/admin'}
      , {title: 'form  (template-driven)', path: '/form'}
      , {title: 'form (reactive)', path: '/reactive-form'}
      , {title: 'custom directive', path: '/example-directive'}
      , {title: 'products (redux)', path: '/products'}
      , {title: 'counter (redux)', path: '/counter'}
      , {title: 'events', path: '/events'}
      , {title: 'not found (route **)', path: 'asdasdasd'}
      , {title: 'todos list (http example)', path: '/todos'}
    ];

  @select() logMessage: string;

  title = 'my-app';
  isLoggedIn: boolean;
  isAdmin: boolean;
  showLoginButton = false;
  username = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn().subscribe(
      (logged) => {
        const user = authService.user;
        this.isLoggedIn = logged;
        this.showLoginButton = this.router.url !== '/login' && !logged;
        this.isAdmin = user && user.isAdmin;
        this.username = user && user.username;
      }
    );
    router.events
      .filter( event => event instanceof NavigationEnd)
      .map(event => (<RouterEvent>event).url )
      .subscribe( (url) => this.showLoginButton = url !== '/login' && !this.isLoggedIn );
  }


  ngOnInit() {
  }

  logout() {
    this.authService.doLogout();
  }
}
