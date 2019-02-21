import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accesories', 'Hat'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'assets/images/products/blue-jacket.jpg',
        ['Woman', 'Apparel', 'Jacket & Vest'],
        238.99
      ),
      new Product(
        'NIKEBLACK',
        'Black Running Shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
