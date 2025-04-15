import { Component, OnInit } from '@angular/core';
import { Services } from '../../interfaces/services';
import { Work } from '../../interfaces/work';
import { Portfolio } from '../../interfaces/portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  service: Services = {
    img: '../../assets/img/icon/designer.png',
    title: 'Design Skills',
    description: 'Customize your WordPress theme with tailored designs, intuitive layouts.',
  }


  services: Services[] = [
    {
      img: '../../assets/img/icon/designer.png',
      title: 'Design Skills',
      description: 'Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.',
    },
    {
      img: '../../assets/img/icon/coding.png',
      title: 'Front-end developer',
      description: 'I’m a Front-End Web Developer who is passionate about crafting error-free, responsive, and visually appealing websites with a strong focus on user experience and 100% client satisfaction.',

    },
    {
      img: '../../assets/img/icon/web_devepolment.png',
      title: 'Back-end developer',
      description: 'Back-End Developer with expertise in PHP, Laravel framework, and MySQL database. Passionate about creating robust server-side logic and seamless database integration.',
    }
  ]

  work: Work = {
    img: '../../assets/img/work_icon/idea1.png',
    title: 'Idea',
    describe: 'First Step'
  }

  works: Work[] = [
    {
      img: '../../assets/img/work_icon/idea1.png',
      title: 'Idea',
      describe: 'First Step'
    },
    {
      img: '../../assets/img/work_icon/palette.png',
      title: 'Design',
      describe: 'Second Step'
    },
    {
      img: '../../assets/img/work_icon/developer.png',
      title: 'Develop',
      describe: 'Third Step'
    },
    {
      img: '../../assets/img/work_icon/coffee.png',
      title: 'Result',
      describe: 'Last Step'
    }
  ]

  portfolio: Portfolio = {
    img: '../../assets/img/testimonial/educavo.png',
    title: 'Website Design',
    descrip: 'Built using HTML5, CSS3, and Bootstrap 5'
  }

  portfolioItem: Portfolio[] = [
    {
      img: '../../assets/img/testimonial/educavo.png',
      title: 'Website Design',
      descrip: 'Built using Bootstrap 5, JS and jQuery'
    },
    {
      img: '../../assets/img/testimonial/construck.png',
      title: 'Website Design',
      descrip: 'Built using Bootstrap 5, JS and jQuery'
    },
    {
      img: '../../assets/img/testimonial/medicate.png',
      title: 'Website Design',
      descrip: 'Built using Bootstrap 5, JS and jQuery'
    }
  ]

}
