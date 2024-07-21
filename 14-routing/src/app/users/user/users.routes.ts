import { Routes } from '@angular/router';

import { resolveUserTasks } from '../../tasks/tasks.component';
import { canLeaveEditPage, NewTaskComponent } from '../../tasks/new-task/new-task.component';
import { TasksComponent } from '../../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'always', // Resolve when query params change
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage]
  },
];