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
  user: Usersinterface[] = [];
  products: Productinterface[] = [];
  names: string[] = ['mohammed', 'ali', 'omar'];
  discountedProducts: { name: string; originalPrice: number; discountedPrice: number }[] = [];

  numbers: number[] = [10, 25, 30, 45];
  over20: number[] = [];
  foundProductName: string | null = null;

  prices: number[] = [50, 100, 150];
  totalPrice: number = 0;

  sortNamesOriginal: string[] = ['Zainab', 'Ali', 'Huda'];
  sortNamesSorted: string[] = [];

  marks: number[] = [80, 90, 70];
  allPassed: boolean = false;
  hasHighMark: boolean = false;

  constructor(private userservices: Users, private productsService: ProductsService) {}

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

    this.names.forEach(name => {
      console.log(name);
    });

    this.discountedProducts = this.products.map(p => ({
      name: p.name,
      originalPrice: p.price,
      discountedPrice: p.price * 0.9,
    }));

    this.over20 = this.numbers.filter(n => n > 20);

    const found = this.products.find(p => p.id === 2);
    this.foundProductName = found ? found.name : null;

    this.totalPrice = this.prices.reduce((sum, p) => sum + p, 0);

    this.sortNamesSorted = [...this.sortNamesOriginal].sort();

    this.allPassed = this.marks.every(m => m >= 50);
    this.hasHighMark = this.marks.some(m => m > 90);
  }
}
