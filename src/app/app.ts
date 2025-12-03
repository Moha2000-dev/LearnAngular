import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day1 } from './Copmonets/day1/day1';
import { Day2 } from './Copmonets/day2/day2';
import { Day3 } from "./Copmonets/day3/day3";
import { Day4 } from "./Copmonets/day4/day4";

@Component({
  selector: 'app-root',
  imports: [Day1, Day2, Day3, Day4],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LearnAngular');
}

