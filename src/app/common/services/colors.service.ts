import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Colors {

  readonly bagdeColors = {
    green: {
      bg: "#ECFDF5",
      border: "#A4F4D0",
      text: "#004E3B",
      dots: "#E0F2FE",
      links: "#004E3B",
    },
    blue: {
      bg: "#EFF6FF",
      border: "#BFDBFF",
      text: "#1E3A8A",
      dots: "#E0F2FE",
      links: "#1E3A8A",
    },
    grey: {
      bg: "#fbf7f4",
      border: "#e5ded2",
      text: "#3e3e3e",
      dots: "#e5ded2",
      links: "#3e3e3e",
    },
  }

  readonly theme = this.bagdeColors.grey

}
