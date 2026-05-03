import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { parse } from 'yaml';


@Component({
  standalone: true,
  selector: 'homepage',
  templateUrl: 'home.page.html',
  imports: [AsyncPipe],
})
export class homepage {
  cv: Promise<any> = fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/45cd90a144b6535084ea708a958d211ccfd72da9/cv.txt",
  ) .then((res) => res.text()) .then((text) => parse(text).cv);
}
