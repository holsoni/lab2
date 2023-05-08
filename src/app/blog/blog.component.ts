import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  user:any = [];
  id:any = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id');

    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("users")).find(users => users.id == this.id);
  }
}
