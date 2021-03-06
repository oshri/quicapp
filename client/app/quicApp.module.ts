import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MaterialModule,
          MdIconRegistry,
          MdMenuModule,
          MdDialogModule,
          MdIconModule,
          MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';


// Modules
import { RoutingModule } from './routing.module';
import { QuicAppComponent } from './quicApp.component';
import { LoadingModule, LoadingService } from './modules/loading/loading.module';

// Factories
import { httpFactory } from "./services/httpInterceptor/http.factory";
import { authHttpServiceFactory } from './services/auth/authHttp.factory';

// Services
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { Store } from './services/store/store';
import { API_URL } from './app.tokens';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardLogin } from './services/guards/auth-guard-login.service';
import { AuthGuardAdmin } from './services/guards/auth-guard-admin.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AppHeaderComponent } from './components/appHeader/appHeader.component';
import { UserProfileDialogComponent } from './components/userProfileDIalog/userProfileDialog.component';

@NgModule({
  declarations: [
    QuicAppComponent,
    HomeComponent,
    UserComponent,
    AppHeaderComponent,
    UserProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MdDialogModule,
    MdIconModule,
    MdButtonModule,
    LoadingModule.forRoot()
  ],
  providers: [
    Store,
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    MdIconRegistry,
    AuthHttp,
    {provide: API_URL, useValue: '/api/'},
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    },
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  entryComponents: [
    UserProfileDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [QuicAppComponent]
})

export class QuicAppModule { }
