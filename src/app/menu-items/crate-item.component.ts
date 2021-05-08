import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItemService } from '../../app/services/menu-item.services';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menuItem.model';

@Component({
    templateUrl: './crate-item.component.html',
    styleUrls: ['./crate-item.component.css']
})
export class CrateItemComponent implements OnInit {
    menuItem: MenuItem = new MenuItem(0, '', 0, '', '');
    previewPhoto = false;
    massage: String = '';

    togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }

    constructor(private service: MenuItemService, private router: Router) {}

    ngOnInit(): void {}

    saveMenuItem(miForm: NgForm) {
        var newMenuItem = new MenuItem(
            0,
            miForm.value.name,
            miForm.value.price,
            miForm.value.photoPath,
            ''
        );

        this.service.post(newMenuItem).subscribe(() => {
            this.massage = 'Data Saved Successfully';
        });

        this.router.navigate(['/list']);
    }
    ifLogin() {
        return !this.service.invalidLogin;
    }
}