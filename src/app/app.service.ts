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
        "assets/images/Slide7.png",
        "assets/images/Slide2.png", 
        "assets/images/Slide3.png", 
        "assets/images/Slide6.png", 
        "assets/images/Slide5.png"
      ],
      snippet: "Transforming raw data into actionable insights using Python, SQL, and Excel to drive strategic decision-making and enhance business performance across various industries.",
      content: "In this Data Analytics section, I showcase my ability to transform raw, complex data into meaningful insights that drive strategic business decisions. Leveraging tools such as Python, SQL (Snowflake, SQL Server, MySQL), and Excel, I perform comprehensive analyses, including customer segmentation, sales pattern analysis, and performance optimization. My experience spans across various industries such as aesthetics, financial services, FMCG, and retail, where I have consistently delivered actionable intelligence that has directly influenced company strategy and performance. Through detailed case studies, I demonstrate how my analytical approach has led to measurable improvements in business outcomes, supported by a strong foundation in Data Science and Statistics."
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
      snippet: "Developing and maintaining advanced reporting systems with Power BI, integrating data from multiple sources to deliver comprehensive business insights and optimize operational efficiency.",
      content: "In this Business Intelligence section highlights my expertise in designing and managing advanced automated reporting systems that provide key stakeholders with critical insights. Utilizing Power BI and DOMO, I have developed dynamic dashboards and reporting solutions that integrate data from multiple sources, making it accessible and understandable for both technical and non-technical audiences, and being consumed by both external and internal customers."
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
      snippet: "Implementing machine learning models and advanced analytics techniques, including regression, clustering, and forecasting, to support predictive analysis and automate decision processes.",
      content: "In this Machine Learning section, I delve into my experience with building and implementing machine learning models. My work includes regression analysis, clustering, forecasting, sentiment analysis, and advanced deep learning techniques such as computer vision. For example, in my Master's thesis project, my team and I developed a pilot system for automatic traffic accident detection in Montevideo using convolutional neural network models. This project achieved a remarkable 95.9% accuracy in detecting accidents, demonstrating the potential of AI to contribute to public safety."
    },
    {
      title: "Automations",
      link: "automations",
      images: [
        "assets/images/Automations1.png", 
        "assets/images/Automations2.png", 
        "assets/images/Automations3.png",
        "assets/images/Automations4.png"
      ],
      snippet: "Automating data processes and reporting workflows to significantly reduce operational time, enhance accuracy, and empower teams with real-time data insights.",
      content: "In this Automations section focuses on my ability to streamline data ETL processes and automate reporting workflows, significantly improving efficiency and accuracy. By automating routine tasks such as data cleaning, report generation, and database management, I have been able to help companies reduce operational time and focus on strategic initiatives rather than manual processes."
    }
  ]

  constructor() { }

  scrollTo(selector: string, event?: Event) {
    event?.preventDefault();
    const el: any = document.querySelector(selector)
    if (el) window.scrollTo({ behavior: 'smooth', top: el?.offsetTop - 58 })
  }
}
