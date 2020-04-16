import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// Penser à importer UsersModule dans AppModule

// Générer 3 composants dans le dossier users
// (attention aux générateurs de code, commencer par tester avec -d)
// - Users dont l'url serait /users
// - UserAdd dont l'url serait /users/add
// - UserDetails dont l'url serait /users/:id
// (:id pouvant etre remplacer par un id, ex: /users/123)

// Faire des liens vers ces pages (app.component.html)

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
