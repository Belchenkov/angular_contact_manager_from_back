import { Component, OnInit, ViewChild } from '@angular/core';
import User from "../../models/User";
import { UserService } from "../../services/user.service";

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
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    this.userService.getData().subscribe(data => {
      console.log(data);
    });


    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  onSubmit ({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
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
