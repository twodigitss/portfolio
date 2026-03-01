import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html'
})
export class navbar {
  constructor() {
    console.log('navbar')
  }

}
