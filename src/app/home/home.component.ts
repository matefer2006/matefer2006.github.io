import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get posts() {
    return this.appService.posts;
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

}
