import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameCoreModule } from '@angular-microfrontends/game-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttackComponent } from './attack/attack.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    AttackComponent,
    EmptyRouteComponent,
    ResultComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GameCoreModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
