import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experience = [
    {
      img: '../../assets/images/eton.png',
      title: 'Software Engineering',
      company: 'Eton Solutions Pvt Ltd',
      range: 'July 2023-Present',
      line1: 'Contributed in enhancing their product using Angular',
      line2:'Build a new website called RoboRob AI which is a chatbot using OpenAI Api and Angular.',
    },
    {
      img: '../../assets/images/eton.png',
      title: 'Trainee Engineering',
      company: 'Eton Solutions Pvt Ltd',
      range: 'Aug 2022 - Jun 2023',
      line1: 'Trained on HTML,CSS,JS along with backend SQL',
      line2: 'Contributed in enhancing the product.',
    },
    {
      img: '../../assets/images/verzeo.png',
      title: 'Web Development Intern',
      company: 'Verzeo',
      range: 'Aug 2022 - Jun 2023',
      line1: 'Trained on HTML,CSS,JS along with backend SQL',
      line2:'Collaborated with a team to build an internal design website by using HTML, CSS, and PHP.',
    },
    {
      img: '../../assets/images/ekathva.png',
      title: 'Academic Intern',
      company: 'Ekathva Innovations',
      range: 'Sept 2021',
      line1:'Trained with full-stack web development with technologies Django,MongoDB and Flask.',
      line2: 'Build a website called Boat Service Booking system.',
    },
  ];
}
