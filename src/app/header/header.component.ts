import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GaqModalComponent } from '../gaq-modal/gaq-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _modalservice: NgbModal) { }

  GetQute() {
    this._modalservice.open(GaqModalComponent, { centered: true, size: 'lg' })
  }
  
  ngOnInit(): void {
  }

}

