import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']

})
export class TermsAndConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

  @HostListener('document:scroll', ['$event'])

  onDocumentScroll() {
    let item = document.querySelectorAll('.text-area');
    let active_link = document.querySelectorAll('.scroll');
    item.forEach((value, index) => {
      let rect = value.getBoundingClientRect().y
      if (rect < window.innerHeight - 750) {
        active_link.forEach((value)=>{
          value.classList.remove('active')
        })
        active_link[index].classList.add('active')
      }
    })
  }
}
