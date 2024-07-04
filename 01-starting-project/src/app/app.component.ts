import { Component } from '@angular/core';
// Import the header component
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  user_name = this.users[0].name;
  onSelectUser(id:string) {
    console.log('User id ',id);
    // Get the name if user id matches
    this.user_name = DUMMY_USERS.find((user) => user.id === id)!.name;
  }
}
