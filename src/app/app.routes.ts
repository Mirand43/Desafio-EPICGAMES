import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'leadpage',
        loadComponent: () => import('./leadpage/leadpage.component'),
        children: [
            {
                path: 'home',
                title: 'Home',
                loadComponent: () => import('./leadpage/pages/home/home.component'),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ]
    },
    {
        path: '',
        redirectTo: 'leadpage',
        pathMatch: 'full'
    }

];
