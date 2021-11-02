import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PhoneCatalogueRoutingModule} from "./phone-catalogue-routing.module";
import {PhoneCatalogueComponent} from "./phone-catalogue.component";
import {MaterialModule} from "../material.module";
import {PhoneBrandsComponent} from "./phone-brands/phone-brands.component";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    PhoneCatalogueRoutingModule
  ],
  declarations: [PhoneCatalogueComponent, PhoneBrandsComponent]
})

export class PhoneCatalogueModule { }
