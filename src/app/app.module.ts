import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "./material.module";
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {PhonesService} from "./services/phones.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
