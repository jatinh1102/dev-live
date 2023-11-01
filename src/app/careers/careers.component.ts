import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],

})
export class CareersComponent implements OnInit {

  constructor(private canvas:NgbOffcanvas) { }

  ngOnInit(): void {
  }
  open(content:any){
    this.canvas.open(content,{ariaLabelledBy:'offcanvasExampleLabel'})
  }

}
