import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UsersComponent, UserAddComponent, UserDetailsComponent],
  imports: [CommonModule, FormsModule, UsersRoutingModule],
})
export class UsersModule {}
