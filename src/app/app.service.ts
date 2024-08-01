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
      images: [
        "assets/images/Slide1.png", 
        "assets/images/Slide2.png", 
        "assets/images/Slide3.png", 
        "assets/images/Slide4.png", 
        "assets/images/Slide5.png"
      ],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel felis hendrerit, sagittis lacus at, accumsan metus. Sed tempor, ligula a feugiat lobortis, odio arcu tristique nulla, nec egestas augue lorem a arcu. In ut quam eget libero mollis tincidunt finibus at eros. Cras porta lacus neque, eget efficitur mauris venenatis at. Aenean pellentesque dolor sit amet enim lacinia, quis mollis diam egestas. Fusce mattis, eros vel hendrerit venenatis, orci odio ultrices tellus, sed semper nunc quam sit amet eros. Quisque in ante lobortis, fringilla neque vel, finibus lacus. Nulla eget ante eros. Mauris sodales augue est, in tincidunt risus venenatis non. Nulla non lacinia metus. Aenean molestie placerat enim, id tristique felis auctor id. Sed vitae orci turpis. Donec consectetur odio ac mi vehicula, a consequat augue ornare."
    },
    {
      title: "Business Intelligence",
      link: "business-intelligence",
      images: [
        "assets/images/PBI Slide1.png", 
        "assets/images/PBI Slide2.png", 
        "assets/images/PBI Slide3.png",
        "assets/images/PBI Slide4.png",
        "assets/images/PBI Slide5.png",
        "assets/images/PBI Slide6.png"
      ],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    },
    {
      title: "Machine Learning",
      link: "machine-learning",
      images: [
        "assets/images/DS Slide3.png",
        "assets/images/DS Slide6.png",
        "assets/images/DS Slide7.png",
        "assets/images/DS Slide4.png",
        "assets/images/DS Slide2.png",
        "assets/images/DS Slide5.png",
        "assets/images/DS Slide1.png"
      ],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    },
    {
      title: "Automation",
      link: "automation",
      images: [
        "assets/images/Slide1.jpeg", 
        "assets/images/Slide2.jpeg", 
        "assets/images/Slide3.png"
      ],
      snippet: "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
    }
  ]

  constructor() { }
}
