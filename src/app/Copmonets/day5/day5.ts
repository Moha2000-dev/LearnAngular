import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-day5',
  imports: [CommonModule, RouterLink],
  templateUrl: './day5.html',
  styleUrl: './day5.css',
})
export class Day5 {
  // array of users with id and number names and ages 
  user = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Ethan', age: 32 },
  ];
//
}