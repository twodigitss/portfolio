import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpeedDialComponent  } from "../../common/components/speeddial/speeddial.component";
import { Footer } from '../../common/components/footer/footer.component';
import { ParticlesComponent  } from "../../common/components/particles/particles.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    SpeedDialComponent,
    Footer,
    ParticlesComponent,
  ],
})
export class App {

}
