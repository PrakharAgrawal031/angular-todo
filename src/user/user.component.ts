import {signal, Component, computed } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selsectedUser = signal(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]);
  imagePath = computed(()=> 'assets/users/' + this.selsectedUser().avatar)
  // get imagePath(){
  //   return 'assets/users/' + this.selsectedUser.avatar;
  // }

  onSelection(){
    this.selsectedUser.set(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]);
  }
}
