import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: {name: 'Home'}},
    { path: 'projects', component: ProjectsComponent, data: {name: 'Projects'}},
    { path: 'blog', component: BlogComponent, data: {name: 'Blog'}},
    {path : '**' , redirectTo : '/home' , pathMatch : 'full'},
    
];
