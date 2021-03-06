'use strict';

import { Person } from './Person';

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  };

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  };

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  };

  skipDays(numberOfDays: number) {
    return this.skippedDays + numberOfDays;
  };
}

export default Student;