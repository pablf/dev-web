import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ProjectsComponent} from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  myRoutes = [
    { path: 'home', component: HomeComponent, data: {name: 'Home'}},
    { path: 'projects', component: ProjectsComponent, data: {name: 'Projects'}},
    { path: 'blog', component: BlogComponent, data: {name: 'Blog'}},
  ];
}



