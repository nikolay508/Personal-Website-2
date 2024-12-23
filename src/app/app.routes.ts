import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', loadComponent: () =>import('./views/home-view/home-view.component').then((c) => c.HomeViewComponent),},
{path: 'about', loadComponent: () => import('./views/about-view/about-view.component').then((c) => c.AboutViewComponent),},
{path: 'projects', loadComponent: () => import('./views/projects-view/projects-view.component').then((c) => c.ProjectsViewComponent),},
{path: 'skills', loadComponent: () =>import('./views/skills-view/service-view.component').then((c) => c.SkillsViewComponent),},

{path: '404', loadComponent: () => import('./error/error.component').then((c) => c.ErrorComponent),},
{path: '**', redirectTo: '/404'},
];
