import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';

import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListMenuItemsComponent } from './menu-items/list-menu-items/list-menu-items.component';
import { CrateItemComponent} from './menu-items/crate-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutOrderComponent,
    CrateItemComponent,
    ModelsComponent,
    ServicesComponent,
    WelcomeComponent,
    ListMenuItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
