import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Utility Type : Partial / ReadOnly...
  // newTodo: Partial<Todo> = {
  //   title: '',
  //   completed: false,
  // };

  newTodo: Todo = {
    title: '',
    completed: false,
  };

  @Output()
  add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    // this.newTodo.id = Math.random();
    // this.add.emit(this.newTodo);

    this.add.emit({
      ...this.newTodo, // récupère les propriétés de newTodo
      id: Math.random(),
    })
  }
}
