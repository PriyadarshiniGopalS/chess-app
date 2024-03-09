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
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

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
  {
    path: 'contact',
    component: ContactComponent,
    children: []
  },
  {
    path: 'events',
    component: EventsComponent,
    children: []
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
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
    AboutComponent,
    ContactComponent,
    EventsComponent,
    AchievementsComponent,
    AdmissionFormComponent
  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LayoutComponent
  ],
  bootstrap:[LayoutComponent]
})
export class LayoutModule { }
