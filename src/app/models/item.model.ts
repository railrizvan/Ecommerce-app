import { MenuItem } from '../models/menuItem.model';

export class Item {
    menuItem: MenuItem;
    quantity: number;

    constructor(mi: MenuItem, qty: number) {
        this.menuItem = mi;
        this.quantity = qty;
    }
}