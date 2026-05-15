import { Component } from "@angular/core";
import { tablerBriefcase, tablerMail } from "@ng-icons/tabler-icons";
import { CommonModule } from "@angular/common";
import { NgIcon } from "@ng-icons/core";
import { CV } from "../../common/services/cv.service";
import { inject } from "@angular/core";

@Component({
  standalone: true,
  selector: 'cvpage',
  templateUrl: 'cv.page.html',
  imports: [CommonModule, NgIcon ]
})
export class cvpage {
  readonly cv = inject(CV);

  readonly icons = {
    tablerBriefcase,
    tablerMail
  }

}
