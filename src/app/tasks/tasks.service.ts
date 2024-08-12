import { Injectable } from '@angular/core';
import { newTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      title: 'Master Angular',
      summary: 'Master Angular within 10 days',
      userId: 'u1',
      dueDate: '2024-07-19',
    },
    {
      id: 't2',
      title: 'Build a website',
      summary: 'Create a website using Angular',
      userId: 'u1',
      dueDate: '2024-08-05',
    },
    {
      id: 't3',
      title: 'Learn React',
      summary: 'Learn React and build a simple app',
      userId: 'u1',
      dueDate: '2024-08-12',
    },
  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');

    if(tasks){
        this.tasks = JSON.parse(tasks);
    }
  }

  getUser(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskdata: newTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskdata.title,
      summary: taskdata.summary,
      userId: userId,
      dueDate: taskdata.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
