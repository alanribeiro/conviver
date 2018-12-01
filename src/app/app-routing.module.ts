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

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'my-ads',
        component: MyAdsComponent
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
