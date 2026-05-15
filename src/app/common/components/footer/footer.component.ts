import { Component, inject, signal } from "@angular/core";
import { NgIcon } from "@ng-icons/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { tablerBrandGithub,
  tablerBrandLinkedin,
  tablerCloudDownload,
  tablerMail,
} from "@ng-icons/tabler-icons";
import { CV } from "../../services/cv.service";
import { Colors } from "../../services/colors.service";

@Component({
  selector: 'app-footer',
  templateUrl:'footer.component.html',
  imports: [
    NgIcon,
    AsyncPipe,
    CommonModule
  ],
})
export class Footer {
  // implements OnInit, OnDestroy
  readonly cv = inject(CV)
  readonly colors = inject(Colors);
  hoveredItem = signal<string | null>(null)

  readonly icons = {
    tablerMail,
    tablerBrandLinkedin,
    tablerBrandGithub,
    tablerCloudDownload,
  }

  readonly footerItems = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/torrescervle", icon: this.icons.tablerBrandLinkedin },
    { name: "Github", link: "https://github.com/twodigitss", icon: this.icons.tablerBrandGithub },
    { name: "Email", link: "", icon: this.icons.tablerMail },
  ]

  // INFO: initialy it had sense to have a router tracker here because i wanted to add
  // dynamic elements to the footer based on the current route, but since i evaluated
  // the necessities of this page, i does not longer make sense.

  // private routerSubscription: any;
  // private router =  inject(Router)
  // currentUrl = signal('');
  // isCvRoute = computed(() => this.currentUrl().includes('/cv'));
  // isShopRoute = computed(() => this.currentUrl().includes('/shop'));

  // ngOnInit() {
  //   this.routerSubscription = this.router.events.pipe(
  //     filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  //   ).subscribe((event: NavigationEnd) => {
  //     this.currentUrl.set(event.urlAfterRedirects);
  //   });
  // }

  // ngOnDestroy() {
  //   this.routerSubscription?.unsubscribe();
  // }


}
