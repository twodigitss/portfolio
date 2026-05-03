import { Component } from "@angular/core";
import { NgIcon } from "@ng-icons/core";
import { parse } from 'yaml';
import { tablerBrandGithub,
  tablerBrandLinkedin,
  tablerCloudDownload,
  tablerHeartDollar,
  tablerMail
} from "@ng-icons/tabler-icons";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-footer',
  imports: [
    NgIcon,
    AsyncPipe
  ],
  template: `
    <footer class="FOOTER_APP rounded-lg bg-[#fafafa] border border-[#e5e5e5] px-5 py-1 fixed bottom-0 right-0 flex gap-6 justify-end items-center mb-8 mx-8 print:hidden">

      <a
        class="flex gap-2 items-center text-sm font-light hover:font-normal duration-100"
        href="https://drive.proton.me/urls/0B5PZPVNCR#KLCJ49ylzG7x"
        target="_blank"
        rel="noopener"
        >
          Resume
          <ng-icon [svg]="icons.tablerCloudDownload" size="16" strokeWidth="2" class="cursor-pointer" />
      </a>

      <!--p class="text-[#e0e0e0]">||</p-->

      <a
        class="flex gap-2 items-center text-sm font-light hover:font-normal duration-100"
        target="_blank"
        rel="noopener"
        [href]="'mailto:' + (cv | async)?.email"
        >
          Contact
          <ng-icon [svg]="icons.tablerMail" size="14" strokeWidth="2" class="cursor-pointer" />
      </a>


      <a
        class="flex gap-2 items-center text-sm font-light hover:font-normal duration-100"
        href="https://github.com/twodigitss"
        target="_blank"
        rel="noopener"
        >
          GitHub
          <ng-icon [svg]="icons.tablerBrandGithub" size="14" strokeWidth="2" class="cursor-pointer" />
      </a>

      <a
        class="flex gap-2 items-center text-sm font-light hover:font-normal duration-100"
        href="https://www.linkedin.com/in/torrescervle"
        target="_blank"
        rel="noopener"
        >
          LinkedIn
          <ng-icon [svg]="icons.tablerBrandLinkedin" size="14" strokeWidth="2" class="cursor-pointer" />
      </a>


    </footer>
  `
})
export class Footer {
  // implements OnInit, OnDestroy
  cv: Promise<any> = fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/45cd90a144b6535084ea708a958d211ccfd72da9/cv.txt",
  ) .then((res) => res.text()) .then((text) => parse(text).cv);

  readonly icons = {
    tablerMail,
    tablerBrandLinkedin,
    tablerBrandGithub,
    tablerCloudDownload,
    tablerHeartDollar,
  }

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
