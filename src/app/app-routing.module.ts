import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        canActivate: [AuthGuard],
        loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
    },
    {
        path: 'register',
        canActivate: [AuthGuard],
        loadChildren: () => import('./register/register.module').then(mod => mod.RegisterModule),
    },
    {
        path: 'theses-list',
        canActivate: [AuthGuard],
        loadChildren: () => import('./theses-list/theses-list.module').then(mod => mod.ThesesListModule),
    },
    {
        path: 'thesis-details/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('./thesis-details/thesis-details.module').then(mod => mod.ThesisDetailsModule),
    },
    {
        path: 'thesis-add',
        canActivate: [AuthGuard],
        loadChildren: () => import('./thesis-add/thesis-add.module').then(mod => mod.ThesisAddModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
