import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos$(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let msg: string;
    if (error.status === 404) {
      msg = 'not found error';
    } else {
      msg = 'error';
    }
    return throwError(msg);
  }
}
