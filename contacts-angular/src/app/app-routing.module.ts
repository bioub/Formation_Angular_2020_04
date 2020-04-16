import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PresentationComponent } from './core/presentation/presentation.component';

const routes: Routes = [
  {
    path: '', // sans le slash de début
    component: HomeComponent,
  },
  {
    path: 'presentation', // sans le slash de début
    component: PresentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
