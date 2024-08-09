import {Component, computed, Input, input, Output, signal, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //using Input decorator
  @Input({required: true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter();
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  // Using input signal 
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> 'assets/users/' + this.avatar())

  // Using old approach
  // selsectedUser = signal(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]);
  // imagePath = computed(()=> 'assets/users/' + this.selsectedUser().avatar)
  

  onSelection(){
    // this.selsectedUser.set(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]);
    this.select.emit(this.id);
  }
}

