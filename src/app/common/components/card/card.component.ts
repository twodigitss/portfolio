import { Component, inject, Input } from "@angular/core";
import { NgIcon } from "@ng-icons/core";
import { Colors } from "../../services/colors.service";
import { tablerBrandGithub, tablerExternalLink, tablerLink } from "@ng-icons/tabler-icons";

@Component({
  selector: "project-card",
  templateUrl: "./card.component.html",
  imports: [NgIcon],
})
export class CardComponent {
  @Input() title!: string;
  @Input() headline!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() linkUrl!: string;
  @Input() demoUrl!: string;
  @Input() Technologies!: any[]; //presuntamente los tabler icons son strings...
  readonly colors = inject(Colors);

  readonly icons = {
    tablerLink,
    tablerExternalLink,
    tablerBrandGithub,
  }

}
