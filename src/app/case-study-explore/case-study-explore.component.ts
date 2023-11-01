import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CtaModalComponent} from '../cta-modal/cta-modal.component'
import { CaseStudyServiceService } from '../Data_Services/case-study-service.service';

@Component({
  selector: 'app-case-study-explore',
  templateUrl: './case-study-explore.component.html',
  styleUrls: ['./case-study-explore.component.css']
})
export class CaseStudyExploreComponent implements OnInit {

  constructor(private modalService:NgbModal, private _service:CaseStudyServiceService) { }
  case_data:any[] = [];
  case_course:any;
  case_study_data: any;

    Enquirymodal(){
     this.modalService.open(CtaModalComponent ,{ centered: true, size: 'lg'})
     }
  ngOnInit(): void {
    this.case_data = this._service.case_study_data;
    this.case_course = this._service.case_study_course;
    this.case_study_data =  this._service.case_study_details()
  }

}
