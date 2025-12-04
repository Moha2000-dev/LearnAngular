import { Routes } from '@angular/router';
import { Day1 } from './Copmonets/day1/day1';
import { Day2 } from './Copmonets/day2/day2';
import { Day3 } from './Copmonets/day3/day3';
import { Day4 } from './Copmonets/day4/day4';
import { Day5 } from './Copmonets/day5/day5';

export const routes: Routes = [
    {path: '', redirectTo: 'day1', pathMatch: 'full'},
    {path:"day1",component:Day1},
    {path:"day2",component:Day2},
    {path:"day3",component:Day3},
    {path:"day4",component:Day4},
    {path:"day5",component:Day5},

];
