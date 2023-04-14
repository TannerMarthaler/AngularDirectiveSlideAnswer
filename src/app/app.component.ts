import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle: boolean = true;

  count: number = 0;
  logOfCount: number[] = [];

  changeToggle(): void {
    this.toggle = !this.toggle;
    this.logOfCount.push(this.count++);
  }

  clearLog(): void {
    this.count = 0;
    this.logOfCount = [];
  }
}
