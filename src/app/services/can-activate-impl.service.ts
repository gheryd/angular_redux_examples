import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateImpl implements CanActivate{


    constructor(private auth:AuthService, private router:Router){

    }

    canActivate(){
        console.log("can activate");
        return this.auth.isLoggedIn().map(
            (loggedIn) => {
                console.log("canActivated logged in", loggedIn);
                if(loggedIn){
                    return true;
                }else {
                    this.router.navigate(["/login"]);
                    return false;
                }
            }
        );
    }
}


