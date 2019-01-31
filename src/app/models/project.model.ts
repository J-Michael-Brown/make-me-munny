import { Milestone } from './milestone.model';
import { Reward } from './reward.model';
import { Pledge } from './pledge.model';

export class Project {

  public milestones: Milestone[];
  public rewards: Reward[];
  public pledges: Pledge[];

  constructor(public title: string, public username: string, public description: string, public associates: string[] = [], public catagories: string[] = []){}


  startProject(milestones: Milestone[], rewards: Reward[]){
    this.milestones = milestones;
    this.rewards = rewards;
  }

}
