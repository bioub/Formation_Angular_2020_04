import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  // private userService: UserService;
  // constructor(userService: UserService) {
  //   this.userService = userService
  // }
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Marble Graph (- => 100ms)
    // client : -----(click:1)-----(click:3)-----(click:2)--------------
    // prmMp  : -----({id: 1})-----({id: 3})-----({id: 2})--------------
    // getById: ----------------({id: 1})-------------({id: 2})---({id: 3})------

    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('id')).subscribe((user) => {
    //     this.user = user;
    //   });
    // });

    // Marble Graph (- => 100ms)
    // client : -----(click:1)-----(click:3)-----(click:2)--------------
    // prmMp  : -----({id: 1})-----({id: 3})-----({id: 2})--------------
    // getById: ----------------({id: 1})-------------({id: 2})---------
    this.user$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => this.userService.getById(paramMap.get('id')))
    );
  }
}
