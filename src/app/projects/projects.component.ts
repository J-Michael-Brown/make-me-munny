import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})


export class ProjectsComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectsService: ProjectsService) {}

  goToProjectDetails(clickedProject: Project) {
    // this.router.navigate(['projects', clickedProject.$key]);
  }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
