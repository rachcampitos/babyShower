import { Component, OnInit, HostBinding } from '@angular/core';
import * as AOS from 'aos';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prototype';
  theme = localStorage.getItem('theme') || 'light';

  body = document.body;
  constructor(public overlayContainer: OverlayContainer) {}
  lightActive = true;
  darkActive = false;
  @HostBinding('class') componentCssClass;
  ngOnInit() {
    AOS.init();
    document.body.classList.add(this.theme);
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    });

    const selectElement = (s) => document.querySelector(s);
    // Open Menu
    selectElement('.open').addEventListener('click', () => {
      selectElement('.nav-list').classList.add('active');
    });
    selectElement('.close').addEventListener('click', () => {
      selectElement('.nav-list').classList.remove('active');
    });
    // Top top button
    const toTop = document.querySelector('.to-top');
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100
        ? toTop.classList.add('enabled')
        : toTop.classList.remove('enabled');
    });
    this.changeTheme(this.theme);
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
