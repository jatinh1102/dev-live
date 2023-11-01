import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Data_Services/blog.service';
import { MembersService } from '../Data_Services/members.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GaqModalComponent } from '../gaq-modal/gaq-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loader:boolean = true;

  constructor(private _service: BlogService,
    private _membersService: MembersService,
    private modalService: NgbModal
  ) { }
  blog_data: any[] = [];
  members_data: any[] = [];


  Enquirymodal() {
    this.modalService.open(GaqModalComponent, { centered: true, size: 'lg' })
  }

  ngOnInit(): void {
    this.blog_data = this._service.blog_data;
    this.members_data = this._membersService.members_data;

  }
}
