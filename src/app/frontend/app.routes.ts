import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m=>m.homepage) },
  { path: 'cv', loadComponent: () => import('./pages/cv/cv.page').then(m=>m.cvpage) },
  { path: 'shop', loadComponent: () => import('./pages/shop/shop.page').then(m=>m.shoppage) },
];
