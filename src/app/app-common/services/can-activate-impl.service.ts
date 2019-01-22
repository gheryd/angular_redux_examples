import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CanActivateImpl implements CanActivate {


    constructor(private auth: AuthService, private router: Router) {

    }

    canActivate() {
        return this.auth.isLoggedIn().map(
            (loggedIn) => {
                if (loggedIn) {
                    return true;
                } else {
                    alert('Loggin required');
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        );
    }
}


