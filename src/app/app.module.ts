import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// bootstrap modules 
import { NgbActiveModal, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';


//  owl-carousel-o modules
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//forms 
import { ReactiveFormsModule } from '@angular/forms';

// httpclientmodule
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { CareersDetailsComponent } from './careers-details/careers-details.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseStudyExploreComponent } from './case-study-explore/case-study-explore.component';
import { CareersInfoComponent } from './careers-info/careers-info.component';
import { BlogComponent } from './blog/blog.component';
import { MembersComponent } from './members/members.component';
import { CtaModalComponent } from './cta-modal/cta-modal.component';
import { FaqComponent } from './faq/faq.component';
import { GaqModalComponent } from './gaq-modal/gaq-modal.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesExploreComponent } from './services-explore/services-explore.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

// services
import { CareersDetailsService } from './Data_Services/careers-details.service';
import { CareersInfoService } from './Data_Services/careers-info.service';
import { SuccesfulySendEnquryComponent } from './succesfuly-send-enqury/succesfuly-send-enqury.component';
import { LoaderComponent } from './loader/loader.component';
import { NavBgChangeDirective } from './Directive/nav-bg-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutComponent,
    CareersComponent,
    CareersDetailsComponent,
    CaseStudyComponent,
    CaseStudyExploreComponent,
    CareersInfoComponent,
    BlogComponent,
    MembersComponent,
    CtaModalComponent,
    FaqComponent,
    GaqModalComponent,
    PrivacyPolicyComponent,
    ServicesExploreComponent,
    TermsAndConditionsComponent,
    SuccesfulySendEnquryComponent,
    LoaderComponent,
    NavBgChangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbScrollSpyModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbAccordionModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxNavbarModule,
  ],
  providers: [CareersDetailsService, CareersInfoService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
