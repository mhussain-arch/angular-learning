import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './task/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Set the input to in app-tasks in app.components.html
  @Input({required: true}) user_id!: string;
  @Input({required: true}) name!: string;
  showModal = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user_id);
  }

  onShowFormModal() {
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onCancelAddTask(){
    this.showModal = false;
  }

  onAddTask(taskData: NewTask){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: this.user_id
    })
    this.showModal = false;
  }
}
