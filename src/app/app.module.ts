import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Firebase config.....
export const firebaseConfig = {
  apiKey: "AIzaSyDa_gg9CtTu0lF4JMTc89difq8ko-Hlsl4",
  authDomain: "plan-aparty.firebaseapp.com",
  databaseURL: "https://plan-aparty.firebaseio.com",
  projectId: "plan-aparty",
  storageBucket: "plan-aparty.appspot.com",
  messagingSenderId: "24890170189"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
    , FormsModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
