import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuItem.model';
import { MenuItemService } from '../../services/menu-item.services';


@Component({
  // selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {
  menuItems?: MenuItem[];

  constructor(private service: MenuItemService) {}

  ngOnInit(): void {
      this.service.get().subscribe((data: MenuItem[]) => {
          this.menuItems = data;
      });
  }
  addCartData(id?: number, qty?: number): void {
      let cartData = localStorage.getItem('cartData') || '[]';
      let data = JSON.parse(cartData);
      if (data != null) {
          for (let i = 0; i < data.length; ++i) {
              let idx: number = JSON.parse(data[i]).id;
              if (idx === id) {
                  data.splice(i, 1);
              }
          }
      }
      data.push(JSON.stringify({ id: id, qty: qty }));
      localStorage.setItem('cartData', JSON.stringify(data));
      alert('Added to Cart');
  }
  clearCartData(): void {
      localStorage.setItem('cartData', '');
  }
  remove(id: number) {
      const index = this.menuItems?.findIndex((c) => c.id == id) || -1;
      //debugger;

      if (index > -1) {
          this.menuItems?.splice(+index, 1);
      }
      this.service.delete(id);
  }
  ifLogin() {
      return !this.service.invalidLogin;
  }
}
