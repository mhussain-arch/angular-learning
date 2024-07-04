import { Component, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// Create data for random user we will import later dynamically
export class UserComponent {
  // required: true means that a value is required for input
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  avatar = input<string>(); // an input to this component
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  onSelectUser(){
  }
}
