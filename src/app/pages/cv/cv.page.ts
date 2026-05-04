import { Component } from "@angular/core";
import { tablerBriefcase, tablerMail } from "@ng-icons/tabler-icons";
import { CommonModule } from "@angular/common";
import { NgIcon } from "@ng-icons/core";
import { CV } from "../../common/services/cv.service";
import { inject } from "@angular/core";
import { CardComponent } from "../../common/components/card/card.component";
import { simpleBun, simpleReact, simpleJavascript, simpleCss, simpleHtml5, simpleGnubash, simpleVite } from "@ng-icons/simple-icons";

@Component({
  standalone: true,
  selector: 'cv',
  templateUrl: 'cv.page.html',
  imports: [CommonModule, NgIcon, CardComponent]
})
export class cvpage {
  readonly cv = inject(CV);

  readonly icons = {
    tablerBriefcase,
    tablerMail
  }

  readonly projectIcons = {
    pageper: [
      simpleJavascript,
      simpleReact,
      simpleBun,
      simpleCss,
      simpleHtml5,
      simpleGnubash,
      simpleVite,
    ],
  }
}
