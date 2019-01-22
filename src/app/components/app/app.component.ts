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
      , {title: 'authorized content', path: '/authorized'}
      , {title: 'admin content', path: '/admin'}
      , {title: 'form', path: '/form'}
      , {title: 'custom directive', path: '/example-directive'}
      , {title: 'products', path: '/products'}
      , {title: 'counter', path: '/counter'}
      , {title: 'events', path: '/events'}
      , {title: 'not found', path: 'asdasdasd'}
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
        router.navigate(['/login']);
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
