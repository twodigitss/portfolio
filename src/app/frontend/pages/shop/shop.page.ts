import { Component } from "@angular/core";
import cv from "../../../../assets/dwayne.json";
import { tablerMail } from "@ng-icons/tabler-icons";
import { NgIcon } from "@ng-icons/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'shop-page',
  templateUrl: 'shop.page.html',
  imports: [CommonModule ]
})
export class shoppage {
  constructor() { }
  readonly cv = cv;
  readonly icons = {
    tablerMail
  }

}
