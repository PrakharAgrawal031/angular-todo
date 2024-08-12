import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from './new-task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<newTask>();
  enteredTask = '';
  enteredSummary = '';
  enteredDate = '';
  cancelTask(){
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title: this.enteredTask,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
