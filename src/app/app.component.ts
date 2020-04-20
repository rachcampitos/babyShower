import { Component, OnInit, HostBinding } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prototype';
  theme = localStorage.getItem('theme') || 'light';
  constructor(public overlayContainer: OverlayContainer) {}
  lightActive = true;
  darkActive = false;
  @HostBinding('class') componentCssClass;
  ngOnInit() {
    this.changeTheme(this.theme);
  }
  changeTheme(theme) {
    this.theme = theme;
    console.log(this.theme);
    this.componentCssClass = theme;
    if (theme == 'light') {
      this.overlayContainer
        .getContainerElement()
        .classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    let isLightTheme: boolean = theme == 'light';
    this.darkActive = isLightTheme ? true : false;
    this.lightActive = isLightTheme ? false : true;
  }
}
