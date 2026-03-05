import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbar } from "../../common/components/navbar/navbar.component";
import { SpeedDialComponent  } from "../../common/components/speeddial/speeddial.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    navbar,
    SpeedDialComponent
  ],
})
export class App {
}
