import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    { img:'../../assets/images/angular_icon.png',name: 'Angular', rating: 5 },
    { img:'../../assets/images/sql_icon.png',name: 'SQL', rating: 5 },
    { img:'../../assets/images/python_icon.png',name: 'Python', rating: 3 },
    { img:'../../assets/images/java_icon.png',name: 'Java', rating: 3 },
    { img:'../../assets/images/android_app_icon.png',name: 'Android Studio using Kotlin', rating: 3 },

  ];
}
