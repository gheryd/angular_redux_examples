import { Component, OnInit } from '@angular/core';
import { AppAction } from '../../services/actions';
import {select} from 'ng2-redux';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @select('counter') count;

  constructor(private appAction: AppAction) { }

  ngOnInit() {
  }


  increment() {
    this.appAction.increment();
  }

  decrement() {
    this.appAction.decrement();
  }

  reset() {
    this.appAction.reset();
  }
}
