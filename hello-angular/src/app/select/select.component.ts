import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: [
    './select.component.css'
  ]
})
export class SelectComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter<string>();
  opened = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.selected && this.items.length) {
      this.selected = this.items[0];
    }
  }

}
