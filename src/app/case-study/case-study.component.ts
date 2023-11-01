import { Component, OnInit } from '@angular/core';
import { CaseStudyServiceService } from '../Data_Services/case-study-service.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {


  constructor(private _service:CaseStudyServiceService) { }
  case_data:any[] = [];
  case_course:any;
  ngOnInit(): void {
    this.case_data = this._service.case_study_data;
    this.case_course = this._service.case_study_course;
  }

  case_study(value:any){
    this._service.case_details.next(value)
  }

}