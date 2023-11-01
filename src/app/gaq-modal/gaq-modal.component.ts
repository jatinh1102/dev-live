import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MongodbPostService } from '../Data_Services/mongodb-post.service';
import { WhiteSpace } from '../validation/white-space';

@Component({
  selector: 'app-gaq-modal',
  templateUrl: './gaq-modal.component.html',
  styleUrls: ['./gaq-modal.component.css']
})
export class GaqModalComponent implements OnInit {

  constructor(public activemodal: NgbActiveModal, private _mongoservice: MongodbPostService) { }

  Get_Qute: any;

  send_Qute(Data: any) {
    this.activemodal.close()
    this._mongoservice.mongodb_Get_Qute(Data).subscribe(
      res => {
        console.log('Data posted successfully:', res);
      },
      err => {
        console.error('Error posting data:', err);
      }
    )
  }

  ngOnInit(): void {
    this.Get_Qute = new FormGroup({
      full_name: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      Email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      Company_name: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      project_start: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      project_budget: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      message: new FormControl('')
    })
  }

}
