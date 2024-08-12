import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  addingTask = false;
  
  constructor(private tasksService: TasksService){}

  get selectedUserTasks() {
    return this.tasksService.getUser(this.userId)
  }

  // onCompleteTask(id: string) {
  //   // Implement logic to mark task as completed
  //   this.tasksService.removeTask(id);
  // }

  addTask() {
    this.addingTask = true;
  }

  onCloseAddTask() {
    this.addingTask = false;
  }
}
