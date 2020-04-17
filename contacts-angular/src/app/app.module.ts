import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { PresentationComponent } from './core/presentation/presentation.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UsersModule,
    AppRoutingModule, // à la fin à cause -> **
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
