import { Component } from "@angular/core";
import cv from "../../../../assets/cv.json";
import { tablerMail } from "@ng-icons/tabler-icons";
import { NgIcon } from "@ng-icons/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'homepage',
  templateUrl: 'home.page.html',
  imports: [NgIcon,CommonModule ]
})
export class homepage {
  constructor() { }
  readonly cv = cv;
  readonly icons = {
    tablerMail
  }

}
