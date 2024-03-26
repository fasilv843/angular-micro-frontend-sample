import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path: 'rem1',
        loadComponent: () => import('remoteapp1/AppComponent')
            .then((module) => {
                console.log('module 1 loaded', module);
                return module.AppComponent
            })
            .catch((err) => {
                console.log(err, 'error while loading remote 1');
            })
    },
    {
        path: 'rem2',
        loadComponent: () => import('remoteapp2/AppComponent')
            .then((module) => {
                console.log('module 2 loaded', module);
                return module.AppComponent
            })
            .catch((err) => {
                console.log(err, 'error while loading remote 2');
            })

    }
];
