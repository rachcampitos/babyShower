import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Hero1Component } from './hero1/hero1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prototype';
  parent;
  theme = localStorage.getItem('theme') || 'light';

  body = document.body;
  constructor(public overlayContainer: OverlayContainer) {}
  lightActive = true;
  darkActive = false;
  @HostBinding('class') componentCssClass;
  @HostListener('document:click', ['$event'])
  ngOnInit() {
    AOS.init();
    document.body.classList.add(this.theme);
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

  toggleMenu() {
    const action = document.querySelector('.action');
    action.classList.toggle('active');
  }
  /*
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (
      !(
        event.target &&
        event.target.className &&
        event.target.className.indexOf
      )
    ) {
      return;
    }

    if (event.target.className.indexOf('.action') === -1) {
      this.toggleMenu();
    }
  } */
}
