import { Component } from "@angular/core";
import cv from "../../../../assets/dwayne.json";

@Component({
  standalone: true,
  selector: 'homepage',
  templateUrl: 'home.page.html',
})
export class homepage {
  constructor() { }
  readonly cv = cv;

}
