import { Component } from "@angular/core";
import { CardComponent } from "../../common/components/card/card.component";
import { simpleJavascript, simpleReact, simpleBun, simpleCss, simpleHtml5, simpleGnubash, simpleGo, simpleGin, simpleSupabase, simplePostgresql } from "@ng-icons/simple-icons";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'projectspage',
  templateUrl: 'projects.page.html',
  imports: [CardComponent, CommonModule]
})
export class projectspage {

  readonly info = [
    {
      title: "Pageper",
      headline: "Distraction-free startup page for browsers",
      description: `Minimalist distraction-free startup page for browsers. Helps users to stay focused by reducing cognitive noise. `,
      imageUrl: "https://addons.mozilla.org/user-media/previews/full/321/321796.png?modified=1748234547",
      linkUrl: "https://github.com/twodigitss/pageper",
      demoUrl: "https://addons.mozilla.org/en-US/firefox/addon/pageper/",
      Technologies: [
        {name: "Javascript", icon: simpleJavascript},
        {name: "React", icon: simpleReact},
        {name: "Bun", icon: simpleBun},
        {name: "Css", icon: simpleCss},
        {name: "Html5", icon: simpleHtml5},
        {name: "Bash", icon: simpleGnubash},
      ],
    },
    {
      title:"ReservGo",
      headline:"Reservation API made in golang",
      description:"A Project to explore Clean Architecture principles and strict separation of concerns.",
      imageUrl:"https://adivor.com.mx/wp-content/uploads/2024/10/placeholder-1-1.png",
      linkUrl:"https://github.com/twodigitss/reserv-go",
      demoUrl: "https://reservgo.onrender.com",
      Technologies:[
        {name:"Golang", icon: simpleGo } ,
        {name: "Gin", icon: simpleGin},
        {name: "Supabase", icon: simpleSupabase},
        {name: "Postgresql", icon: simplePostgresql},
      ],

    }
  ]

}
