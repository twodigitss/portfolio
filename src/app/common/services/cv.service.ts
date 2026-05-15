
import { Injectable } from "@angular/core";
import { parse } from 'yaml';

@Injectable({ providedIn: 'root' })
export class CV {
  readonly cv: Promise<any> = fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/cv.txt",
  ).then((res) => res.text()).then((text) => parse(text).cv);

}
