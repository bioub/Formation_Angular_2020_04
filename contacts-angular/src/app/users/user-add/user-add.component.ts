import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user = new User();
  // user: User = {
  //   name: '',
  //   email: '',
  // };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  submit() {
    this.userService.create(this.user).subscribe((user) => {
      // this.router.navigate(['users', user.id]);
      this.router.navigate(['users']);
    });
  }

}
