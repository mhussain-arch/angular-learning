import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/user/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const router = inject(Router);
    const giveAccess = Math.random();
    // If the give access variable is 1 then let user access route
    if (giveAccess < 0.5){
        return true;
    }
    // or else redirect them to '/unauthorized' route
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const routes: Routes = [
    {
        path: '', // This is the default path
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        // canMatch: [dummyCanMatch],
        data: {
            message: 'Hello'
        },
        resolve: {
          userName: resolveUserName  
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]