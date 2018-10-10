import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { CoPageTitleComponent } from './atoms/co-page-title/co-page-title.component';
import { CoPageSubtitleComponent } from './atoms/co-page-subtitle/co-page-subtitle.component';
import { CoPageHeaderComponent } from './molecules/co-page-header/co-page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CoButtonComponent } from './atoms/co-button/co-button.component';
import { CoSectionTitleComponent } from './atoms/co-section-title/co-section-title.component';
import { CoRoundedButtonComponent } from './atoms/co-rounded-button/co-rounded-button.component';
import { CoMenuItemComponent } from './atoms/co-menu-item/co-menu-item.component';
import { CoMenuItemsComponent } from './molecules/co-menu-items/co-menu-items.component';
import { CoAvatarComponent } from './atoms/co-avatar/co-avatar.component';
import { CoMainHeaderComponent } from './organisms/co-main-header/co-main-header.component';
import { CoMobileMenuButtonComponent } from './atoms/co-mobile-menu-button/co-mobile-menu-button.component';
import { CoNotificationButtonComponent } from './atoms/co-notification-button/co-notification-button.component';
import { CoSelectComponent } from './atoms/co-select/co-select.component';
import { CoRateComponent } from './atoms/co-rate/co-rate.component';
import { CoDividerComponent } from './atoms/co-divider/co-divider.component';
import { CoStepperDotsDotComponent } from './atoms/co-stepper-dots-dot/co-stepper-dots-dot.component';
import { CoTextareaComponent } from './atoms/co-textarea/co-textarea.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    StyleguideComponent,
    CoPageTitleComponent,
    CoPageSubtitleComponent,
    CoPageHeaderComponent,
    CoButtonComponent,
    CoSectionTitleComponent,
    CoRoundedButtonComponent,
    CoMenuItemComponent,
    CoMenuItemsComponent,
    CoAvatarComponent,
    CoMainHeaderComponent,
    CoMobileMenuButtonComponent,
    CoNotificationButtonComponent,
    CoSelectComponent,
    CoRateComponent,
    CoDividerComponent,
    CoStepperDotsDotComponent,
    CoTextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
