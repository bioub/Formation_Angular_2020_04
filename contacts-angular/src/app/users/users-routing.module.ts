import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Penser à importer UsersModule dans AppModule

// Générer 3 composants dans le dossier users
// (attention aux générateurs de code, commencer par tester avec -d)
// - Users dont l'url serait /users
// - UserAdd dont l'url serait /users/add
// - UserDetails dont l'url serait /users/:id
// (:id pouvant etre remplacer par un id, ex: /users/123)

// Faire des liens vers ces pages (app.component.html)

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
