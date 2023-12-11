import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }