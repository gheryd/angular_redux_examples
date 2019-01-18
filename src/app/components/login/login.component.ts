import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthI } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;
  userAuth:UserAuthI = {username:"", password:""}

  constructor(private authService:AuthService, private router:Router) {
      authService.isLoggedIn().subscribe(
        (logged) => {
          if(logged) {
            router.navigate(["/"])
          }
        }
      );
   }

  ngOnInit() {

  }

  signin(f){
    this.loading = true;
    this.authService.doAuth(this.userAuth).subscribe(
      (user) => {
        this.loading = false;
        if(user){
          this.router.navigate(["/authorized"])
        }else {
          alert("login incorrect!");
        }
        
      }
    );
  }

}
