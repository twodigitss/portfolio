import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { cvpage } from "../cv/cv.page";
import { Colors } from "../../common/services/colors.service";
import { CV } from "../../common/services/cv.service";

@Component({
  standalone: true,
  selector: 'homepage',
  templateUrl: 'home.page.html',
  imports: [AsyncPipe, cvpage],
})
export class homepage {
  readonly cv = inject(CV);
  readonly colors = inject(Colors);

}
