import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import {
  tablerLayoutGrid,
  tablerCategory2,
  tablerSmartHome,
  tablerFileCv,
  tablerShoppingCart,
  tablerFingerprint,
  tablerBrandSafari,
  tablerCompass,
  tablerNews,
  tablerPlus,
  tablerMenu2,
} from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  templateUrl: './speeddial.component.html',
  imports: [
    CommonModule, NgIcon,
    RouterModule // <-- importa RouterModule aquí
  ],
})
export class SpeedDialComponent {
  open = signal(false);

  radius = 80; // distancia desde el boton principal
  startAngle = 0;
  endAngle = 90;

  readonly excludedIcons = {
    tablerLayoutGrid,
    tablerCategory2,
    tablerCompass,
    tablerPlus,
    tablerMenu2,
  }

  // estoy matcheando las rutas tal cual estan declaradas en el app.routes,
  // asi me evito la paja de tener que hacer un switch/case o algo asi...
  readonly icons = new Map([ //LIMITE DE 5!! porque luego se buggea, sobreponiendose
    ['home', tablerSmartHome],
    ['cv', tablerNews],
    ['shop', tablerShoppingCart],
  ]);

  positions = computed(() => {
    const step = (this.endAngle - this.startAngle) / (this.icons.size - 1);

    return Array.from(this.icons.keys()).map((_, i) => {
      const angle = (this.startAngle + step * i) * (Math.PI / 180);
      const x = Math.cos(angle) * this.radius;
      const y = Math.sin(angle) * this.radius;
      return { x, y };
    });
  });

  toggle() {
    this.open.update(v => !v);
  }
}
