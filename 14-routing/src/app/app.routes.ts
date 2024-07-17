import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

export const routes: Routes = [
    {
        path: '', // This is the default path
        component: NoTaskComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    }
]