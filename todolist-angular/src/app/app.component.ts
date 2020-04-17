import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private subscription: Subscription;

  todos: Todo[] = [{
    id: 123,
    title: 'Pain',
    completed: false,
  }, {
    id: 456,
    title: 'Lait',
    completed: true,
  }];

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  addTodo(todo) {
    // this.todos.push(todo); // changement muable

    this.todos = [...this.todos, todo]; // changement immuable
  }

  ngOnInit() {
    this.todos$ = this.todoService.getAll();
  }

  // ngOnInit() {
  //   this.subscription = this.todoService.getAll().subscribe((todos) => {
  //     this.todos = todos;
  //   })
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  /*
  Exercice :
  - Générer un service TodoService
  - D'y injecter HttpClient (pensez à HttpClientModule)
  - D'y ajouter une méthode getAll qui requete via la méthode GET
  https://jsonplaceholder.typicode.com/todos
  - D'injecter le service TodoService ici
  - Au ngOnInit appeler la méthode getAll du service
  et de stocker le résultats dans this.todos
  */
}
