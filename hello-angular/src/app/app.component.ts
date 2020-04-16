import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Angular';
  compteur = 10;

  names = ['Romain', 'Jean', 'Eric'];
  name = 'Jean';
}
