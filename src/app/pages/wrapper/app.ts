import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Footer } from '../../common/components/footer/footer.component';
import { ParticlesComponent  } from "../../common/components/particles/particles.component";
import { homepage } from '../home/home.page';
import { cvpage } from '../cv/cv.page';
import { projectspage } from '../projects/projects.page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    // RouterOutlet,
    homepage, cvpage, projectspage,
    Footer,
    ParticlesComponent,
  ],
})
export class App {

}
