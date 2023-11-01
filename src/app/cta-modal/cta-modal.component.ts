import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccesfulySendEnquryComponent } from '../succesfuly-send-enqury/succesfuly-send-enqury.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MongodbPostService } from '../Data_Services/mongodb-post.service';

@Component({
  selector: 'app-cta-modal',
  templateUrl: './cta-modal.component.html',
  styleUrls: ['./cta-modal.component.css'],
})
export class CtaModalComponent {
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,private fb: FormBuilder, private _mongoservice:MongodbPostService) { }

 public myForm:any;
  
  ngOnInit() {
    this.myForm = new FormGroup({
      first_name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      last_name : new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
      Email : new FormControl('',[Validators.email,Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      phone_no : new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      message : new FormControl('')
    })
  }
  Enquiryclose(form: any) {
    this.activeModal.dismiss()
    this.modalService.open(SuccesfulySendEnquryComponent, { centered: true, size: 'lg' });
    this._mongoservice.mongodb_Call_To_Action(form).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    )
  }
}

