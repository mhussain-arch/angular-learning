import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// Create data for random user we will import later dynamically
export class UserComponent {
  // This property is now available in the user.component.html template
  selectedUser = DUMMY_USERS[randomIndex];

  // Create a getter which generates the path to the images
  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }
}
