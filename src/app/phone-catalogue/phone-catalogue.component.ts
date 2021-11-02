import { Component, OnInit } from '@angular/core';
import {PhonesService} from "../services/phones.service";
import {Options} from "../models/phone-brands";
import {Router} from "@angular/router";

@Component({
  selector: 'app-phone-catalogue',
  templateUrl: './phone-catalogue.component.html',
  styleUrls: ['./phone-catalogue.component.css']
})
export class PhoneCatalogueComponent implements OnInit {

  availablePhoneBrands: Options[] | undefined;

  constructor(private phoneService: PhonesService, private router: Router) { }

  ngOnInit(): void {
    this.phoneService.getAvailablePhoneBrands().subscribe(resp => {
      this.availablePhoneBrands = resp['options'];
    });
  }

  goToBrand(brand: string):void {
    this.router.navigate(['phones',brand])
  }
}
