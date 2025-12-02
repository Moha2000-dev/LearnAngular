import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './services/users';
import { Usersinterface } from '../../shared/userInterface/user.models';

import { ProductsService } from './services/product';
import { Productinterface } from '../../shared/userInterface/product.models';

enum Role {
  Admin,
  User,
  Guset,
}

interface UserInterface {
  id: number;
  name: string;
  emil: string;
}

const userDeatails: UserInterface = {
  id: 1,
  name: 'mohamed',
  emil: 'mohamgetMaxListeners.com',
};

@Component({
  selector: 'app-day2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day2.html',
  styleUrl: './day2.css',
})
export class Day2 implements OnInit {
  constructor(private userservices: Users, private productsService: ProductsService) {}

  user: Usersinterface[] = [];
  products: Productinterface[] = [];

  ngOnInit(): void {
    let fristname: string = 'mohammed';
    let yersOfExsprines: number = 5;
    let isStudebt: boolean = true;
    let hopies: string[] = ['coding', 'reading'];
    let person: [string, number] = ['mohammed', 23];

    enum rolesEnump {
      Admin,
      User,
      Guset,
    }

    let myrole: rolesEnump = rolesEnump.Admin;
    console.log(
      `Name: ${fristname}, Years of experience: ${yersOfExsprines}, Is student: ${isStudebt}, Hobbies: ${hopies.join(
        ', '
      )}, Person: ${person[0]} is ${person[1]} years old, My role: ${rolesEnump[myrole]}`
    );

    let uerRole: Role = Role.Admin;
    console.log();

    this.user = this.userservices.getUsers();

    this.products = this.productsService.getAllProducts();

    //create an array of names {mohammed ,ali ,omar} and display 
  const names: string[] = ['mohammed', 'ali', 'omar'];
  names.forEach(name => {
    console.log(name);
  });
  
  }
  

  }

