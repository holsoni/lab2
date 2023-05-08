import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  siteName = 'FaynoZNO';
  user='Учень';

  showMessage = false;
  menu = [{label:"Математика", isActive:false},
    {label:"Українська", isActive:false},
    {label:"Матеріали", isActive:false},
    {label:"Блог", isActive:false},
  ];

  helloWorld() {
    this.showMessage = !this.showMessage;
  }
  data = [
    {name:'Урок 1',
    description:'Цілі числа',
    img:'https://cdn-icons-png.flaticon.com/512/207/207473.png',
    complexity:7,
      type:'Math',
    display:true
  },
    {name:'Урок 2',
      description:'Дробові числа',
      img:'https://cdn-icons-png.flaticon.com/512/207/207473.png',
      rating:8,
      type:'Math',
      display:true
    },
    {name:'Урок 3',
      description:'Множення',
      img:'https://cdn-icons-png.flaticon.com/512/207/207473.png',
      rating:5,
      type:'Math',
      display:false
    },
    {name:'Урок 1',
      description:'Звуки',
      img:'https://cdn-icons-png.flaticon.com/512/207/207473.png',
      rating:7,
      type:'Ukrainian',
      display:true
    },
    {name:'Урок 2',
      description:'Розділові знаки',
      img:'https://cdn-icons-png.flaticon.com/512/207/207473.png',
      rating:8,
      type:'Ukrainian',
      display:true
    },
  ]
  cards = true;

  changeView(){
    this.cards = !this.cards;
  }

}
