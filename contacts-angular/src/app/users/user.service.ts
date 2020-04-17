import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

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
    return this.httpClient.get<User>(backendUrl + '/' + id);
  }

  create(user) {
    return this.httpClient.post<User>(backendUrl, user);
  }
}
