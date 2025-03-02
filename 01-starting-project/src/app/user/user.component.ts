import { Component, Input, Output, input, computed, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// Create data for random user we will import later dynamically
export class UserComponent {
  // required: true means that a value is required for input
  // We need to display task of a user we click
  // First get the id of the user
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // Below is an example of signal input
  // avatar = input.required<string>(); // an input to this component
  // name = input.required<string>(); // Create a name string angular input
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
