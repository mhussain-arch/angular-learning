import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './task/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Set the input to in app-tasks in app.components.html
  @Input({required: true}) user_id!: string;
  @Input({required: true}) name!: string;
  showModal: boolean = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user_id);
  }

  onShowFormModal() {
    this.showModal = ~this.showModal;
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
