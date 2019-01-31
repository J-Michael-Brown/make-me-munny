import { Milestone } from './milestone.model';
import { Reward } from './reward.model';
import { Pledge } from './pledge.model';

export class Project {

  public goals: Milestone[];
  public rewards: Reward[];
  public funds: Pledge[];

  constructor(public name: string, public username: string, public description: string, public associates: string[], public catagories: string[] = []){}


  startProject(goals: Milestone[], rewards: Reward[]){
    this.goals = goals;
    this.rewards = rewards;
  }

}
