import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { HomepageViewTwoComponent } from './views/homepage-view-two/homepage-view-two.component';
import { ReceiptViewComponent } from './views/receipt-view/receipt-view.component';
import { AboutUsViewComponent } from './views/about-us-view/about-us-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', pathMatch: 'full', component: HomepageViewComponent, data: { title: 'Pride of Mt Pisgah' } },
  { path: 'home2', pathMatch: 'full', component: HomepageViewTwoComponent, data: { title: 'Pride of Mt Pisgah' } },
  { path: 'receipt', pathMatch: 'full', component: ReceiptViewComponent, data: { title: 'Receipt' } },
  { path: 'aboutUs', pathMatch: 'full', component: AboutUsViewComponent, data: { title: 'About Us' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }