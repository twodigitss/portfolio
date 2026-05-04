import { Component, Input, inject } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { OutMode, Engine, RecursivePartial, IOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { Colors } from '../../services/colors.service';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  template: `
    <ngx-particles
      [id]="id"
      [options]="options"
      [particlesInit]="particlesInit"
      style="position: absolute; width: 100%; height: 100%; z-index: -1;"
    />
  `,
})
export class ParticlesComponent {
  readonly colors = inject(Colors);

  @Input() id = 'particles-background';
  @Input() options: RecursivePartial<IOptions> = {
    background: {
      color: { value: '#ffffff' }, // Canvas background color
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' }, // Add particles on click
        onHover: { enable: true, mode: 'repulse' }, // Push particles away on hover
        resize: { enable: true }, // Handle window resize
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 50, duration: 0.4 },
      },
    },
    particles: {
      color: { value: this.colors.theme.dots, /*{ value: { min: 0.3, max: 0.7 } }*/ }, // Particle color
      links: {
        color: this.colors.theme.links, // Connection line color
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        outModes: { default: OutMode.bounce }, // Bounce off edges
        speed: 1, // Movement speed
      },
      number: {
        density: { enable: true }, // Responsive particle count
        value: 20,
      },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 } }, // Random particle sizes
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
