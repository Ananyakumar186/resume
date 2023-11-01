import { Component } from '@angular/core';
import { AppService } from 'app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  education = [
    {
      img:"../assets/images/jnn.png",
      name:'Jawaharlal Nehru National College of Engineering',
      occupation:"Bachelor's degree, Computer Science",
      year:"2018 - 2022",
      grade:'CGPA 8.3'
    },
    {
      img:"../assets/images/pesit.png",
      name:"PESITM",
      occupation:"PCMCs",
      year:"2016 - 2018",
      grade:'83%'
    },
    {
      img:"../assets/images/mandara-1.png",
      name:"Mandara Jnanadayini School",
      occupation:"1 to 10th",
      year:"2006 - 2016",
      grade:'CGPA 8.6'
    }
  ]
  constructor(public deviceService: AppService){}
}

