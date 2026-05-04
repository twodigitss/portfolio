import { Component, inject } from "@angular/core";
import { NgIcon } from "@ng-icons/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { tablerBrandGithub,
  tablerBrandLinkedin,
  tablerCloudDownload,
  tablerMail,
} from "@ng-icons/tabler-icons";
import { CV } from "../../services/cv.service";

@Component({
  selector: 'app-footer',
  imports: [
    NgIcon,
    AsyncPipe,
    CommonModule
  ],
  template: `
    <footer
      class="flex flex-col fixed top-0 right-0 m-8 rounded-lg px-2 py-4 gap-6 justify-center items-center print:hidden backdrop-blur-[2px]"
    >

      @for (item of footerItems; track item.name) {

        <!-- semi functional (except for the email) [href]="item.link" target="_blank" -->
        <a
          class="flex gap-2 items-center text-sm font-light hover:font-normal duration-100"
          [href]="item.name === 'Email' ? 'mailto:' + ((cv.cv | async)?.email ?? '') : item.link"
          [target]="item.name === 'Email' ? '_self' : '_blank'"
          rel="noopener"
        >
          <ng-icon [svg]="item.icon" size="18" strokeWidth="2" class="cursor-pointer" />
        </a>

      }

      <!--p class="text-[#e0e0e0]">||</p-->

    </footer>
  `
})
export class Footer {
  // implements OnInit, OnDestroy
  readonly cv = inject(CV)

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
    { name: "CV", link: "https://drive.proton.me/urls/0B5PZPVNCR#KLCJ49ylzG7x", icon: this.icons.tablerCloudDownload }
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
