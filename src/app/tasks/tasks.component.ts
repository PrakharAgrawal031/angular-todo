import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;
  tasks = [
    {
      id: "t1",
      title: 'Master Angular',
      summary: "Master Angular within 10 days",
      userId: 'u1',
      dueDate: "2024-07-19"
    },
    {
      id: "t2",
      title: 'Build a website',
      summary: "Create a website using Angular",
      userId: 'u1',
      dueDate: "2024-08-05"
    },
    {
      id: "t3",
      title: 'Learn React',
      summary: "Learn React and build a simple app",
      userId: 'u1',
      dueDate: "2024-08-12"
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter(task=>task.userId === this.userId)
  }

  onCompleteTask(id: string){
    // Implement logic to mark task as completed
    this.tasks = this.tasks.filter((task)=>task.id !== id)
  }
}
