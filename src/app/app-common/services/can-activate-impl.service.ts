import { AppAction } from './../../services/actions';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CanActivateImpl implements CanActivate {


    constructor(private auth: AuthService, private router: Router, private appAction: AppAction) {

    }

    canActivate() {
        return this.auth.isLoggedIn().map(
            (loggedIn) => {
                if (loggedIn) {
                    this.appAction.log('can activate this content');
                    return true;
                } else {
                    this.appAction.log('Loggin required');
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );
    }
}


