import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Day1 } from './Copmonets/day1/day1';
import { Day2 } from './Copmonets/day2/day2';
import { Day3 } from './Copmonets/day3/day3';
import { Day4 } from './Copmonets/day4/day4';
import { Day5 } from './Copmonets/day5/day5';
import { Navbar } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LearnAngular');

  constructor(public router: Router) {



  }
}
