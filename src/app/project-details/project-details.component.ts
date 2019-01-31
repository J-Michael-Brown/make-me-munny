
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectsService } from '../projects.service';
import { Project } from 'app/models/project.model';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectsService]
})
export class ProjectDetailsComponent implements OnInit {

  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectsService: ProjectsService) {}

  ngOnInit() {
    let projectId: string;
    this.route.params.forEach((urlParameters)=> {

    projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectsService.getProjectById(projectId);
    console.log(this.projectToDisplay)
  }

}
