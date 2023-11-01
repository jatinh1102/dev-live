import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MongodbPostService } from '../Data_Services/mongodb-post.service';
import { WhiteSpace } from '../validation/white-space';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private _mongoservice: MongodbPostService) { }

  contact: any;

  ngOnInit(): void {
    this.contact = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      last_name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      Email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      mobile_no: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      company_name: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      website: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      project_start: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      project_budget: new FormControl('', [Validators.required, WhiteSpace.noSpaceAllowed]),
      message: new FormControl('')
    })
  }

  contact_us(Data: any) {
    this._mongoservice.mongodb_contact_us(Data).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    )
    this.contact.reset();
  }
}

