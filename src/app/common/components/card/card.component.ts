import { Component, Input } from "@angular/core";
import { NgIcon } from "@ng-icons/core";

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
  @Input() Technologies!: string[]; //presuntamente los tabler icons son strings...
}
