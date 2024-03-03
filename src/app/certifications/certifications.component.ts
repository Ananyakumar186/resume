import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
      certifications=[
        {
        img:"../../assets/images/datatech.png",
        title:"Angular",
        issuedBy:"The DataTech Labs Inc",
        link:'../../assets/certificates/Angular_Fundamentals_to_Advanced_Training.pdf'
        },
        {
        img:"../../assets/images/microsoft.jpeg",
        title:"Microsoft Azure Fundamentals (A-Z900)",
        issuedBy:"Microsoft",
        link:'../../assets/certificates/Azure_Fundamentals.pdf'
        },
        {
          img:"../../assets/images/coursera.jpeg",
          title:"Algorithm Toolbox",
          issuedBy:"Coursera",
          link:'../../assets/certificates/Algoritm.pdf'
        },
        {
          img:"../../assets/images/coursera.jpeg",
          title:"Version Control with Git",
          issuedBy:"Coursera",
          link:'../../assets/certificates/git.pdf'
        },
        {
          img:"../../assets/images/Android-logo.png",
          title:"Android Study Jams",
          issuedBy:"Android",
          link:'../../assets/certificates/Android_study_jams_certificate.pdf'
        },
        {
          img:"../../assets/images/greatlearning.png",
          title:"Java",
          issuedBy:"Great Learning",
          link:'../../assets/certificates/java.pdf'
        },
        {
          img:"../../assets/images/udemy.jpeg",
          title:"Automate the boring stuff with Python",
          issuedBy:"Udemy",
          link:'../../assets/certificates/Python.pdf'
        },
        {
          img:"../../assets/images/verzeo.png",
          title:"Data Science",
          issuedBy:"Verzeo",
          link:'../../assets/certificates/data-science.jpg'
        },
        {
          img:"../../assets/images/ekathva.png",
          title:"Exploring Full Stack, Microweb development and Big Data Analytics using Python",
          issuedBy:"JNNCE and Ekathva Innovations",
          link:'../../assets/certificates/jnnce_internship.pdf'
        },
      ]
      openCertificate(link: string): void {
      window.open(link, '_blank', 'width=800,height=600'); // Opens link in a popup window
  }
}
