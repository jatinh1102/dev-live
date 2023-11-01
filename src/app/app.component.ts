import { Component, ElementRef, Renderer2  } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoaderService } from './Data_Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'devtroop';

   loader = true
   constructor(private router: Router, private _loader:LoaderService, private el:ElementRef, private render:Renderer2) {
     this.router.events.subscribe((e: any) => {
       this.navigationInterceptor(e);
     })
   }

   ngOnInit(){
     this._loader.loading_loader.subscribe((res:any)=> this.loader = res);
   }

   body:any;

   navigationInterceptor(event: RouterEvent): void {
     if (event instanceof NavigationStart) {
       this._loader.loading_loader.next(true)
       this.body = document.body.querySelector('.widget-align-right')
       if(this.body){
          this.body.classList.add('add_widget')
        }
     }
     if (event instanceof NavigationEnd) {
       setTimeout(() => {
         this._loader.loading_loader.next(false)
         this.body = document.body.querySelector('.widget-align-right')
          if(this.body){
          this.body.classList.remove('add_widget')
        }
       }, 450);
     }
   }
 }
