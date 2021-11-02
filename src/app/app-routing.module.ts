import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'phones',
    loadChildren: ()=> import('./phone-catalogue/phone-catalogue.module').then(m => m.PhoneCatalogueModule)
  },
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
