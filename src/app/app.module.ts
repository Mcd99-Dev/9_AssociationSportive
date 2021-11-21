import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AjouterGymnaseComponent} from './ajouter-gymnase/ajouter-gymnase.component';
import { ListerGymnaseComponent } from './lister-gymnase/lister-gymnase.component';
import { DetailsGymnaseComponent } from './details-gymnase/details-gymnase.component';
import { HttpClientModule } from '@angular/common/http';
import { ListerSportifComponent } from './lister-sportif/lister-sportif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { DetailsSportifComponent } from './details-sportif/details-sportif.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterGymnaseComponent,
    ListerGymnaseComponent,
    DetailsGymnaseComponent,
    ListerSportifComponent,
    DetailsSportifComponent,
    PageAccueilComponent,
    DetailsSportifComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
