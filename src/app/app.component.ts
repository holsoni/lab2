import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab2';
  siteName = 'FaynoZNO';
  user='Учень';

  ngOnInit(){
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  users =  [{ id: 1, name: 'Victor', lastname: 'Velichko', dateOfBirth: new Date('2/1/1990'), salary: 50000, workingHours: 123456789 },
{ id: 2, name: 'John', lastname: 'Smith', dateOfBirth: new Date('1/1/1980'), salary: 70000, workingHours: 987654321 },
{ id: 3, name: 'Mary', lastname: 'Johnson', dateOfBirth: new Date('5/5/1975'), salary: 60000, workingHours: 555555555 },
{ id: 4, name: 'David', lastname: 'Brown', dateOfBirth: new Date('3/3/1995'), salary: 55000, workingHours: 111111111 },
{ id: 5, name: 'Anna', lastname: 'Davis', dateOfBirth: new Date('4/4/1984'), salary: 80000, workingHours: 222222222 },
{ id: 6, name: 'Michael', lastname: 'Wilson', dateOfBirth: new Date('7/7/1992'), salary: 65000, workingHours: 333333333 },
{ id: 7, name: 'Julia', lastname: 'Moore', dateOfBirth: new Date('9/9/1970'), salary: 75000, workingHours: 444444444 },
{ id: 8, name: 'Robert', lastname: 'Taylor', dateOfBirth: new Date('11/11/1988'), salary: 72000, workingHours: 999999999 },
{ id: 9, name: 'Emma', lastname: 'Anderson', dateOfBirth: new Date('8/8/1986'), salary: 85000, workingHours: 777777777 },
{ id: 10, name: 'Kate', lastname: 'Doe', dateOfBirth: new Date('6/6/1980'), salary: 88000, workingHours: 12345 }]


}
