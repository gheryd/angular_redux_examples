import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  showLoading = false;
  error = '';

  constructor(private todosService: TodosService) {

  }

  ngOnInit() {
    this.showLoading = true;
    this.todosService.getTodos$().subscribe(
      (todos) => {
        this.showLoading = false;
        this.todos = todos;

      },
      (error: string) => {
        this.showLoading = false;
        console.log('error: ', error);
        this.error = error;
      }
    );
  }

}
