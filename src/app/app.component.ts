import { Component } from '@angular/core';
import {select} from 'ng2-redux'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu:{title:string, path:any}[] = 
    [
      {title:"home", path:"/"}
      ,{title:"form", path:"/form"}
      ,{title:"custom directive", path:"/example-directive"}
      ,{title:"products", path:"/products"}
      ,{title:"counter", path:"/counter"}
      ,{title:"events", path:"/events"}
    ]

  @select() logMessage:string

  title = 'my-app';

  constructor(){
    
  }
  


  

}
