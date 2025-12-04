import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // route parameter to get user id

  userID: number | null = null;
  newUser: any;
  users: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.userID = +params['id']; // the '+' converts string 'id' to a number
        console.log('User ID from route:', this.userID);
      }
    });
  }
}
