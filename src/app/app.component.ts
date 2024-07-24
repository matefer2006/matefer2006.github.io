import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matefer2006.github.io';
  menuOpen: boolean = false;

  get routerConfig() {
    return this.router.config.filter((link) => link.title);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
