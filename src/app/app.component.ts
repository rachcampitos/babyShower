import { Component, OnInit, HostBinding } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prototype';
  theme = localStorage.getItem('theme');

  body = document.body;
  constructor(public overlayContainer: OverlayContainer) {}
  lightActive = true;
  darkActive = false;
  @HostBinding('class') componentCssClass;
  ngOnInit() {
    document.body.classList.add(this.theme);
  }
  changeTheme(theme) {
    this.theme = theme;
    this.body.classList.add(this.theme);
    this.componentCssClass = theme;
    if (theme === 'light') {
      this.body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      this.body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    const isLightTheme: boolean = theme === 'light';
    this.darkActive = isLightTheme ? true : false;
    this.lightActive = isLightTheme ? false : true;
  }
}
