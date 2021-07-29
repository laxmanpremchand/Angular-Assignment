import { Component } from '@angular/core';
import data from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'shopping-cart';
  filterCategory = ''
  productsList: any[] = [];

  ngOnInit() {
    this.productsList = data.data;
  }

  filterMethod(e:any) {
    this.productsList = this.productsList.filter(x => x.p_category == e);
  }
}
