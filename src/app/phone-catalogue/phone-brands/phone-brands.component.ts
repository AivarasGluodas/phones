import { Component, OnInit } from '@angular/core';
import {PhonesService} from "../../services/phones.service";
import {Phones} from "../../models/phones";
import {ActivatedRoute} from "@angular/router";
import { map, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-phone-brands',
  templateUrl: './phone-brands.component.html',
  styleUrls: ['./phone-brands.component.css']
})
export class PhoneBrandsComponent implements OnInit {
  allPhones: Phones[] | undefined;

  constructor(private phoneService: PhonesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().pipe(
      withLatestFrom(this.route.params),
      map(([phones, params]) => phones.filter((phone)=> phone.brand.toLowerCase() === params.brand.toLowerCase()))
    ).subscribe(phones => {
      this.allPhones = phones;
    })
  }

}
