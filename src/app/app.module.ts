import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { Hero1Component } from './hero1/hero1.component';
import { BalloonComponent } from './balloon/balloon.component';
import { ConeComponent } from './cone/cone.component';
import { PointerComponent } from './pointer/pointer.component';

@NgModule({
  declarations: [AppComponent, Hero1Component, BalloonComponent, ConeComponent, PointerComponent],
  imports: [BrowserModule, MatIconModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
