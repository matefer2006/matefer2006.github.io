import { Injectable } from '@angular/core';
import { Post } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  posts: Post[] = [
    {
      title: "Data Analytics",
      link: "data-analytics",
      images: ["assets/images/DA Slide 4.png", "assets/images/DA Slide 4.png", "assets/images/DA Slide 4.png"],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel felis hendrerit, sagittis lacus at, accumsan metus. Sed tempor, ligula a feugiat lobortis, odio arcu tristique nulla, nec egestas augue lorem a arcu. In ut quam eget libero mollis tincidunt finibus at eros. Cras porta lacus neque, eget efficitur mauris venenatis at. Aenean pellentesque dolor sit amet enim lacinia, quis mollis diam egestas. Fusce mattis, eros vel hendrerit venenatis, orci odio ultrices tellus, sed semper nunc quam sit amet eros. Quisque in ante lobortis, fringilla neque vel, finibus lacus. Nulla eget ante eros. Mauris sodales augue est, in tincidunt risus venenatis non. Nulla non lacinia metus. Aenean molestie placerat enim, id tristique felis auctor id. Sed vitae orci turpis. Donec consectetur odio ac mi vehicula, a consequat augue ornare."
    },
    {
      title: "Business Intelligence",
      link: "business-intelligence",
      images: ["assets/images/altas mate-03.jpg", "assets/images/altas mate-03.jpg"],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    },
    {
      title: "Machine Learning",
      link: "machine-learning",
      images: ["assets/images/pic04.jpg", "assets/images/pic04.jpg"],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    },
    {
      title: "Automation",
      link: "automation",
      images: ["assets/images/pic05.jpg"],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    }
  ]

  constructor() { }
}
