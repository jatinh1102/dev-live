import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Data_Services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  loader:boolean = true;

  constructor(private _service: BlogService) { }
  blog_data: any[] = [];
  ngOnInit(): void {
    this.blog_data = this._service.blog_data;

  }
}
