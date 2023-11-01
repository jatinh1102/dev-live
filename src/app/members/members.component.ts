import { Component, OnInit } from '@angular/core';
import { MembersService} from '../Data_Services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private _service:MembersService) { }
    members_data:any[] = [];
    ngOnInit(): void {
      this.members_data = this._service.members_data;
  }

}
