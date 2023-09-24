import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects=[
    {
      title:'Boat Services Booking',
      desc:"A web-based booking system for boat service designed and developed by using Django,Bootstrap, MongoDB, Python and HTML/CSS.Click below for the report.",
      link:'../../assets/docs/BBS.pdf'
    },
    {
      title:'E-Irrigation System',
      desc:'Final Year Project where we build a E-Irrigation system for farmers, The technology used are aurdino,Python,Android Studio using kotlin, Click below for the report.',
      link:'../../assets/docs/E-Irrigation.pdf'
    },
    {
      title:'Hospital Management System',
      desc:'A website system that keeps the record of patients, doctors, and nurses in the database from the user. Click below for the report.',
      link:'../../assets/docs/HMSDB.pdf'
    },
    {
      title:'Internal Designs',
      desc:'An internship training program by Verzeo it is a website designed for clients to browse internal house designs.Click below to see the website.',
      link:'https://interior-design-verzeo.netlify.app/'
    },
    {
      title:'DSC JNNCE',
      desc:'A website designed for our campus representing the Google Developer Students Club.Click below to see the website.',
      link:'https://dscjnnce.github.io/dscjnnce'
    }
  ]
   open(link: string): void {
      window.open(link, '_blank', 'width=800,height=600'); // Opens link in a popup window
  }
}
