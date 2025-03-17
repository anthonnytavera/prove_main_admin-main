import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { ActivityComponent } from './pages/activity/activity.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'trainer',
                component: TrainerComponent
            },
            {
                path: 'activity',
                component: ActivityComponent
            },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    }
];
