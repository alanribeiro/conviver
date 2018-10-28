import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './templates/main/main.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'meus-anuncios',
        component: MyAdsComponent
      }
    ]
  }, {
    path: 'styleguide',
    component: StyleguideComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'cadastro',
    component: RegistrationComponent
  }
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
