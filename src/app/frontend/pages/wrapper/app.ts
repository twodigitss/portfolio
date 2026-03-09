import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpeedDialComponent  } from "../../common/components/speeddial/speeddial.component";
import { tablerBrandGithub, tablerBrandLinkedin, tablerCloudDownload, tablerHeartDollar, tablerMail } from "@ng-icons/tabler-icons";
import cv from "../../../../assets/dwayne.json";
import { Footer } from '../../common/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    SpeedDialComponent,
    Footer,
  ],
})
export class App {

  readonly cv = cv;
  readonly icons = {
    tablerMail,
    tablerBrandLinkedin,
    tablerBrandGithub,
    tablerCloudDownload,
    tablerHeartDollar,
  }
}
