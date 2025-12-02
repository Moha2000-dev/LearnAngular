
import { Injectable } from '@angular/core';
import { Usersinterface } from '../../../shared/userInterface/user.models';

@Injectable({
  providedIn: 'root',
})
export class Users {
  
 
  private users: Usersinterface[] = [
    { id: 1, name: 'mohammed', emil: 'mohammed@example.com' },
    { id: 2, name: 'ali',       emil: 'ali@example.com' },
  ];


  
  getUsers(): Usersinterface[] {
    return this.users;
  }
}
