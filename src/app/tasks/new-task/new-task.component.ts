import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from './new-task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter();
  enteredTask = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TasksService);
  cancelTask(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTask,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId )
    this.close.emit();
  }
}
