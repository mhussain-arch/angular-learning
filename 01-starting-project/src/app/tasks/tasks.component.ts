import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Set the input to in app-tasks in app.components.html
  @Input({required: true}) name!: string;
}
