import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import {MyifDirective} from "./directives/myif.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyifDirective,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'homework';


  users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      role: Role.Admin
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      isActive: false,
      role: Role.User
    },
    {
      id: 3,
      firstName: 'vajiko',
      lastName: 'Smith',
      isActive: true,
      role: Role.Admin
    }

  ];

}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}
