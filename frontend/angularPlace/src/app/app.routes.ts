import { Routes } from '@angular/router';

import { AppGuard } from './app.guard'


import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchMapComponent } from './pages/search-map/search-map.component';
import { FullcontentComponent } from './pages/fullcontent/fullcontent.component';
import { TablelistComponent } from './components/tablelist/tablelist.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'map',
        component: SearchMapComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'admin/login',
        component: AdminLoginComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'admin/dashboard',
        component: AdminDashboardComponent,
        canActivate: [AppGuard],
        children: [
            {
                path: 'list',
                component: TablelistComponent,
            },
            {
                path: 'full',
                component: FullcontentComponent,
            },
        ]
    },
    {
        path: '**',
        component: Page404Component
    },
];
