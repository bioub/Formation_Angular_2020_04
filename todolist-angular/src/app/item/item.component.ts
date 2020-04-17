import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, DoCheck {

  @Input()
  item: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('check item');
  }

}
