import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 🔥 Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { app } from '../environments/environment';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => app)
  ],
  bootstrap: [App]
})
export class AppModule { }
