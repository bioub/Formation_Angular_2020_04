import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styles: [
  ]
})
export class Exercice2Component implements OnInit {

  liste = ['Pain', 'Lait', 'Beurre'];
  saisie = '';

  constructor() { }

  ngOnInit(): void {
  }

}
