import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {routing} from './app.routing';
import { AngularFireModule} from 'angularfire2';

import {SimpleTinyMCEComponent} from './components/simpletinymce/simpletinymce.component';
import {EditorComponent} from './components/editor/editor.component';

import {NavBarComponent} from './components/navbar/navbar.component'
import {AccueilComponent} from './components/accueil/accueil.component';
import {DatalogueComponent} from './components/datalogue/datalogue.component';
import {FaqComponent} from './components/faq/faq.component';
import {PretComponent} from './components/pret/pret.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAi79NqKXL1KlqqOPErZLUx85vFL4yd0C4",
  authDomain: "fcjmp-em.firebaseapp.com",
  databaseURL: "https://fcjmp-em.firebaseio.com",
  storageBucket: "fcjmp-em.appspot.com",
  messagingSenderId: "256682843956"
};

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, NavBarComponent, AccueilComponent, DatalogueComponent, FaqComponent, PretComponent, SimpleTinyMCEComponent, EditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
