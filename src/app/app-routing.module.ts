import { TermsComponent } from './pages/terms/terms.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './components/templates/main/main.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInUpComponent } from './components/templates/sign-in-up/sign-in-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdvertiseVacancyComponent } from './pages/advertise-vacancy/advertise-vacancy.component';
import { AdvertisementComponent } from './pages/advertisement/advertisement.component';
import { SearchComponent } from './pages/search/search.component';
import { HelpComponent } from './pages/help/help.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'my-ads',
        component: MyAdsComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'advertise/vacancy',
        component: AdvertiseVacancyComponent
      },
      {
        path: 'advertisement/:id',
        component: AdvertisementComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'sign',
    component: SignInUpComponent,
    children: [
      {
        path: '',
        redirectTo: 'in',
        pathMatch: 'full'
      }, {
        path: 'in',
        component: LoginComponent
      }, {
        path: 'up',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'styleguide',
    component: StyleguideComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
