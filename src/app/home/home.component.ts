import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CaseStudyServiceService } from '../Data_Services/case-study-service.service';
import { BlogService } from '../Data_Services/blog.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CtaModalComponent} from '../cta-modal/cta-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: CaseStudyServiceService,
   private _blogService: BlogService,
   private renderer: Renderer2,
   private el: ElementRef,
   private modalService:NgbModal) { }
  case_data: any[] = [];
  case_course: any;
  blog_data: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    nav: false
  }
closeCookieModal() {
  const modal = this.el.nativeElement.querySelector('.cookie-modal-fixed');
  if (modal) {
    this.renderer.setStyle(modal, 'display', 'none');
  }
}
   Enquirymodal(){
  this.modalService.open(CtaModalComponent ,{ centered: true, size: 'lg'})
 }


  ngOnInit(): void {
    this.case_data = this._service.case_study_data;
    this.case_course = this._service.case_study_course;
    this.blog_data = this._blogService.blog_data;

  const okButton = document.getElementById('axeptio_btn_acceptAll');
  const noThanksButton = document.getElementById('axeptio_btn_dismiss');
  const closeButton = document.getElementById('axeptio_main_button');

  if (okButton && noThanksButton && closeButton) {
    okButton.addEventListener('click', () => this.closeCookieModal());
    noThanksButton.addEventListener('click', () => this.closeCookieModal());
    closeButton.addEventListener('click', () => this.closeCookieModal());
  }

}
}