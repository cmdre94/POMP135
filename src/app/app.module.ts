import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { SpacingComponent } from './components/spacing/spacing.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { HomepageViewTwoComponent } from './views/homepage-view-two/homepage-view-two.component';
import { ReceiptViewComponent } from './views/receipt-view/receipt-view.component';
import { AboutUsViewComponent } from './views/about-us-view/about-us-view.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, LinkComponent, HomepageViewComponent, SpacingComponent, CardComponent, ButtonComponent, HomepageViewTwoComponent, ReceiptViewComponent, AboutUsViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions(),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
