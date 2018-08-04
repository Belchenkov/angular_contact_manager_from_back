import { Component, OnInit } from '@angular/core';
import User from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses: {};
  currentStyles: {};
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.loaded = true;

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

    /*this.addUser(
      {
        firstName: 'David',
        lastName: 'Jackson'
      }
    );*/

    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  onSubmit () {
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? '0' : '40px',
      "font-size": this.showExtended ? '' : '40px',
    };
  }

}
