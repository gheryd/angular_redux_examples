import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './services/todos.service';
import {HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'todos', component: TodosComponent}
    ])
  ],
  providers: [
    TodosService,
    RouterModule
  ]
})
export class ExampleHttpModule { }
