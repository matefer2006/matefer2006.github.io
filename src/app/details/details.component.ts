import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: Post | undefined;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.post = this.appService.posts.find((post: Post) => post.link == params['id'])
    })
  }

}