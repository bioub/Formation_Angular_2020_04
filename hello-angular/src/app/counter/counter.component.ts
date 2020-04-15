import { Component, Output, EventEmitter, Input } from '@angular/core';

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
  countChange = new EventEmitter();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
