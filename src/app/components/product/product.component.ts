import { ProductI } from './../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()product: ProductI;
  @Output() remove =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onProductRemove() {
    this.remove.emit(this.product);
  }
}
