import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Demo 1', 'Demo 2']);
  goal = this.goals.asObservable();

  constructor() { }

  changegoal(goal) {
    this.goals.next(goal);
  }

}
