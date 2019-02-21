import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListComponent implements OnInit {
  /**
   * @input productList - The product passed to Product List component
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current product whenever a product is selected
   */

// tslint:disable-next-line: no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() {}

  ngOnInit() {}
}
