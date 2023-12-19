import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { EnrollComponent } from './enroll/enroll.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: []
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    EnrollComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LayoutComponent
  ],
  bootstrap:[LayoutComponent]
})
export class LayoutModule { }
