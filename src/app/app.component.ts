import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {TasksComponent} from './tasks/tasks.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-users';
import { USERS_TASKS } from '../users-tasks';
// import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  users = DUMMY_USERS;
  currentUser?: string;
  get selectedUser(){
    return this.users.find((user)=>user.id===this.currentUser);
  }
  onSelection(id: string){
    this.currentUser = id;
  }

}
