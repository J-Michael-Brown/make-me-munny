import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project.model';
import { ProjectsService } from '../projects.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectsService]
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  submitForm(title: string, username: string, description: string) {
    var newProject: Project = new Project(title, username, description);
    this.projectsService.addProject(newProject);
  }
}
