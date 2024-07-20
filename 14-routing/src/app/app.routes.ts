import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/user/users.routes";
export const routes: Routes = [
    {
        path: '', // This is the default path
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]