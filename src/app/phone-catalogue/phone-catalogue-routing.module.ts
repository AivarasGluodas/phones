import {RouterModule, Routes} from "@angular/router";
import {PhoneCatalogueComponent} from "./phone-catalogue.component";
import {NgModule} from "@angular/core";
import {PhoneBrandsComponent} from "./phone-brands/phone-brands.component";


const routes: Routes = [
  {
    path:'',
    component: PhoneCatalogueComponent,
  },
  {
    path: ':brand',
    component: PhoneBrandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhoneCatalogueRoutingModule {}
