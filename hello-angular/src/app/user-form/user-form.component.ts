import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent {

  user = {
    firstName: 'Romain',
    lastName: 'Bohdanowicz',
    isAdmin: true,
  };


}
