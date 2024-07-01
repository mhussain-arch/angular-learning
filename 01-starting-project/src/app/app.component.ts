import { Component } from '@angular/core';
// Import the header component
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
