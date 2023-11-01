import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CtaModalComponent } from '../cta-modal/cta-modal.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  Enquirymodal() {
    this.modalService.open(CtaModalComponent, { centered: true, size: 'lg' })
  }

  ngOnInit(): void {
  }

}