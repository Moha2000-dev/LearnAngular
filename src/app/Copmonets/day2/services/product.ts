import { Injectable } from '@angular/core';
import { Productinterface } from '../../../shared/userInterface/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Productinterface[] = [
    { id: 1, name: 'Keyboard',  price: 25,  inStock: true },
    { id: 2, name: 'Mouse',     price: 10,  inStock: false },
    { id: 3, name: 'Monitor',   price: 120, inStock: true },
  ];

  getAllProducts(): Productinterface[] {
    return this.products;
  }

  
  getAvailableProducts(): Productinterface[] {
    return this.products.filter(p => p.inStock);
  }
}
