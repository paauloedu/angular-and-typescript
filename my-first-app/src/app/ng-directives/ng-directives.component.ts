import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css'],
})
export class NgDirectivesComponent {
  displayDetails = false;
  count = [];
  countClick = 1;

  showDetails() {
    this.displayDetails = !this.displayDetails;
    // this.count.push(this.countClick++);
    this.count.push(new Date());
  }

  displayCount() {
    return this.count;
  }
}
