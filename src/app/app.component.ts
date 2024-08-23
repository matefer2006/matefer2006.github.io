import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from './app.service';

declare let gtag: Function; // Declare gtag function for Google Analytics

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matefer2006.github.io';
  menuOpen: boolean = false;
  firstLoad: boolean = true;

  get routerConfig() {
    return this.router.config.filter((link) => link.title);
  }

  constructor(private router: Router, public appService: AppService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Google Analytics tracking
        gtag('config', 'G-HTFF5PL4WY', {
          'page_path': event.urlAfterRedirects
        });

        if (this.firstLoad == false) this.appService.scrollTo('#main')
        this.firstLoad = false;
      }
    });
  }
}