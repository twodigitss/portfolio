import { Component } from "@angular/core";
import cv from "../../../../assets/dwayne.json";
import { tablerMail } from "@ng-icons/tabler-icons";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'homepage',
  templateUrl: 'home.page.html',
  imports: [CommonModule ]
})
export class homepage {
  constructor() { }
  readonly cv = cv;
  readonly icons = {
    tablerMail
  }

}
