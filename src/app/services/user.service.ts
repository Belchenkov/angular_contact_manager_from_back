import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { of } from "rxjs/index";

import User from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        email: 'jdoe@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('04/12/2014'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 22,
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('02/05/2018'),
        hide: true
      }
    ];
  }

  getData () {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);
    });

    return this.data;
  }

  getUsers (): Observable<User[]> {
    return of(this.users);
  }

  addUser (user: User) {
    this.users.unshift(user);
  }
}
