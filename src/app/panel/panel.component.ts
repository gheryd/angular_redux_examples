import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input()enableFooter:boolean=true;
  @Input()enableHeader:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

}
