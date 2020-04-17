import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';
import { delay } from 'rxjs/operators';

const backendUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root', // useClass dans AppModule
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>(backendUrl);
  }

  getById(id) {
    if (id === '3') {
      return this.httpClient.get<User>(backendUrl + '/' + id).pipe(
        delay(3000),
      );
    }

    return this.httpClient.get<User>(backendUrl + '/' + id);
  }

  create(user) {
    return this.httpClient.post<User>(backendUrl, user);
  }
}
