import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  genderList: {id: string, label: string}[] = [
    {id: 'M', label: 'male'},
    {id: 'F', label: 'female'}
  ];

  likeList: {id: number, label: string}[] = [
    {id: 1, label: 'books'},
    {id: 2, label: 'sport'},
    {id: 3, label: 'cakes'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
