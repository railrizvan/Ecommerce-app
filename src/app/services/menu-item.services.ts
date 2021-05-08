import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuItemService {
    private menuItems: MenuItem[] = [];
    private API_SERVER = 'https://angularbackendwebapi.azurewebsites.net/MenuItem';
    invalidLogin: boolean = true;

    private status = '';

    constructor(private http: HttpClient) {}

    get(): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(this.API_SERVER);
    }
    getMenuItems(): MenuItem[] {
        return this.menuItems;
    }

    post(mi: MenuItem): Observable<MenuItem> {
        const httpHeaders = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post<MenuItem>(
            this.API_SERVER,
            JSON.stringify(mi),
            httpHeaders
        );
    }
    private getSelectedIndex(id: number) {
        for (var i = 0; this.getMenuItem.length; ++i) {
            console.log(id);

            if (this.menuItems[i].id == id) {
                return i;
            }
        }

        return -1;
    }
    delete(id: number) {
        this.http
            .delete(this.API_SERVER + '/' + id)
            .subscribe(() => (this.status = 'Delete successful'));

        return this.status;
    }
    getById(id: number): Observable<MenuItem> {
        return this.http.get<MenuItem>(this.API_SERVER + '/' + id);
    }
    getMenuItem(id: number): MenuItem {
        let res: MenuItem = new MenuItem(0, '', 0, '', '');
        //debugger;
        this.getById(id).subscribe((data: MenuItem) => {
            res.id = data.id;
            res.name = data.name;
            res.price = data.price;
            res.photoPath = data.photoPath;
        });

        return res;
    }

    addMenuItem(mi: MenuItem) {
        this.menuItems.push(mi);
    }
}