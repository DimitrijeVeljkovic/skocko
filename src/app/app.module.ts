import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGameComponent } from './components/main-game/main-game.component';
import { CombinationComponent } from './components/combination/combination.component';
import { ResultComponent } from './components/result/result.component';
import { AvailableSignsComponent } from './components/available-signs/available-signs.component';
import { SignComponent } from './components/sign/sign.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent,
    CombinationComponent,
    ResultComponent,
    AvailableSignsComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
