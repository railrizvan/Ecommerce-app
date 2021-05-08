import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMenuItemsComponent } from './menu-items/list-menu-items/list-menu-items.component';
import { CrateItemComponent } from './menu-items/crate-item.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'list', component: ListMenuItemsComponent },
    { path: 'create', component: CrateItemComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutOrderComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule {}
