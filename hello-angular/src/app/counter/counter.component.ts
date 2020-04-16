import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent {

  @Input()
  count = 0;

  @Output()
  countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
