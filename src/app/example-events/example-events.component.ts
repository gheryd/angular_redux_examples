import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-example-events',
  templateUrl: './example-events.component.html',
  styleUrls: ['./example-events.component.css']
})
export class ExampleEventsComponent implements OnInit {

  textInput:String = "";
  keyInput:String = "";
  email:String = "test@test.it";
  myDate:Date = new Date()
 

  constructor() { }

  ngOnInit() {
  }

  onInput($event){
    this.keyInput = $event.keyCode;
    this.textInput = $event.target.value;
  }

}
