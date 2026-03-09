import { Component, computed, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NgIcon } from "@ng-icons/core";
import cv from "../../../../../assets/dwayne.json";
import { tablerBrandGithub, tablerBrandLinkedin, tablerCloudDownload, tablerHeartDollar, tablerMail } from "@ng-icons/tabler-icons";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-footer',
  imports: [
    NgIcon,
  ],
  template: `
    <footer class="FOOTER_APP bg-white p-2 fixed bottom-0 right-0 flex gap-8 justify-end items-center mb-8 mx-8 print:hidden">

      @if (isCvRoute()) {
        <a href="cv.pdf" target="_blank" rel="noopener" class="flex gap-2 items-center font-light">
          <ng-icon [svg]="icons.tablerCloudDownload" size="16" strokeWidth="2" class="cursor-pointer" />
          cv
        </a>

      }

      @if(isShopRoute()){
        <a class="flex gap-2 items-center font-light" [href]="'mailto:' + cv.basics.email">
          <ng-icon [svg]="icons.tablerHeartDollar" size="16" strokeWidth="2" class="cursor-pointer" />
         <p class="font-light text-[14px]">Support me</p>
        </a>
      }

      <a class="flex gap-2 items-center font-light" [href]="cv.basics.profiles[0].url">
        <ng-icon [svg]="icons.tablerBrandLinkedin" size="14" strokeWidth="2" class="cursor-pointer" />
        <!--{{cv.basics.profiles[0].network}}-->
        Profile
      </a>

      <a class="flex gap-2 items-center font-light" [href]="cv.basics.profiles[1].url">
        <ng-icon [svg]="icons.tablerBrandGithub" size="14" strokeWidth="2" class="cursor-pointer" />
        <!--{{cv.basics.profiles[1].network}}-->
        Code
      </a>

      <a class="flex gap-2 items-center font-light" [href]="'mailto:' + cv.basics.email">
        <ng-icon [svg]="icons.tablerMail" size="14" strokeWidth="2" class="cursor-pointer" />
        Contact
      </a>

    </footer>
  `
})
export class Footer implements OnInit, OnDestroy {

  private routerSubscription: any;

  readonly cv = cv;
  readonly icons = {
    tablerMail,
    tablerBrandLinkedin,
    tablerBrandGithub,
    tablerCloudDownload,
    tablerHeartDollar,
  }

  private router =  inject(Router)
  currentUrl = signal('');
  isCvRoute = computed(() => this.currentUrl().includes('/cv'));
  isShopRoute = computed(() => this.currentUrl().includes('/shop'));

  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }


}
