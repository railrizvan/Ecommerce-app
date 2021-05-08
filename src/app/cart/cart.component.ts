import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../services/menu-item.services';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;
  isCartEmpty: boolean = false;

  constructor(private service: MenuItemService) {}

  ngOnInit(): void {
      this.loadCart();
  }

  loadCart(): void {
      this.items = [];
      this.total = 0;

      let dataSourse = localStorage.getItem('cartData') || null;

      if (dataSourse != null) {
          let cartData = JSON.parse(dataSourse);
          if (cartData.length > 0) {
              this.isCartEmpty = false;
          } else {
              this.isCartEmpty = true;
          }
          for (let i = 0; i < cartData.length; ++i) {
              let id: number = JSON.parse(cartData[i]).id;

              let menuItem = this.service.getMenuItem(id);
              let q: number = JSON.parse(cartData[i]).qty;

              let item = new Item(menuItem, q);

              this.items.push(item);
          }
      }
  }
  getTotal() {
      return this.items
          .reduce((a, b) => a + b.menuItem.price * b.quantity, 0)
          .toFixed(2);
  }

  onchange(i: number, value: number) {
      this.items[i].quantity = value;
  }
  remove(idx: number): void {
      let dataSourse = localStorage.getItem('cartData') || null;

      if (dataSourse != null) {
          let cartData = JSON.parse(dataSourse);

          cartData.splice(idx, 1);
          localStorage.setItem('cartData', JSON.stringify(cartData));
      }

      this.loadCart();
  }
}
