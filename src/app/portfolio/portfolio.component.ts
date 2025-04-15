import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'] // ✅ styleUrls ঠিক করা হয়েছে
})
export class PortfolioComponent {

  slides: { img: string }[] = [             // ✅ slides টাইপ ঠিক করা হয়েছে
    { img: 'assets/img/project/project1.png' },
    { img: 'assets/img/project/project2.png' },
    { img: 'assets/img/project/project3.png' },
    { img: 'assets/img/project/project4.png' },
    { img: 'assets/img/project/project5.png' },
    { img: 'assets/img/project/project6.png' }
  ];

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, // ✅ এখানে কমা (,) যোগ করা হয়েছে
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, // ✅ এখানে কমা (,) যোগ করা হয়েছে
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  


}
