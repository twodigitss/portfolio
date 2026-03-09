import { Component } from "@angular/core";
import cv from "../../../../assets/dwayne.json";
import { tablerMail } from "@ng-icons/tabler-icons";
import { NgIcon } from "@ng-icons/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'cv',
  templateUrl: 'cv.page.html',
  imports: [CommonModule]
})
export class cvpage {
  readonly cv = cv;
  readonly icons = {
    tablerMail
  }

}
