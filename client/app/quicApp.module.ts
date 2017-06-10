import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdIconRegistry, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';


// Modules
import { RoutingModule } from './routing.module';
import { QuicAppComponent } from './quicApp.component';
import {  LoadingModule, LoadingService } from './modules/loading/loading.module';


// Services
import { API_URL } from './app.tokens';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    QuicAppComponent,
    HomeComponent,
    UserComponent
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
    LoadingModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    MdIconRegistry,
    {provide: API_URL, useValue: '/api/'},
  ],
  schemas: [],
  bootstrap: [QuicAppComponent]
})

export class QuicAppModule { }