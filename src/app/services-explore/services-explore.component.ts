import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CtaModalComponent} from '../cta-modal/cta-modal.component'

@Component({
  selector: 'app-services-explore',
  templateUrl: './services-explore.component.html',
  styleUrls: ['./services-explore.component.css']
})
export class ServicesExploreComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  
  Enquirymodal(){
     this.modalService.open(CtaModalComponent ,{ centered: true, size: 'lg'})
     }
  ngOnInit(): void {
  }

}
