import { Component, Input } from '@angular/core';
import { Project, myProjects } from '../data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = myProjects;
  mkHref(project: Project): string {
    if (project.src != undefined) return "https://github.com/pablf/" + project.src!
    else return "https://github.com/pablf/" + project.name
  }
}
