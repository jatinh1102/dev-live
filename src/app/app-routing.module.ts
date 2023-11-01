import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ServicesComponent} from './services/services.component'
import { ContactUsComponent} from './contact-us/contact-us.component'
import { AboutComponent} from './about/about.component'
import { CareersComponent} from './careers/careers.component'
import { CareersDetailsComponent} from './careers-details/careers-details.component'
import { CaseStudyComponent} from './case-study/case-study.component'
import { CaseStudyExploreComponent} from './case-study-explore/case-study-explore.component'
import { BlogComponent} from './blog/blog.component'
import { MembersComponent} from './members/members.component'
import { CtaModalComponent} from './cta-modal/cta-modal.component'
import { FaqComponent} from './faq/faq.component'
import { GaqModalComponent} from './gaq-modal/gaq-modal.component'
import { PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component'
import { ServicesExploreComponent} from './services-explore/services-explore.component'
import { TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component'

const routes: Routes = [
 { path: 'home',
 title: 'DevTroop | Home',
 component: HomeComponent,  } ,

 { path: 'about', 
 title: 'DevTroop | About-Us',
 component: AboutComponent },

 { path: 'services', 
 title: 'DevTroop | Services',
 component: ServicesComponent },

 { path: 'careers', 
 title: 'DevTroop | Careers',
 component: CareersComponent },

 { path: 'contact-us', 
 title: 'DevTroop | Contact-Us',
 component: ContactUsComponent },

 { path: 'careers-details', 
 title: 'DevTroop | Careers-Details',
 component: CareersDetailsComponent },

 { path: 'case-study', 
 title: 'DevTroop | Case Study',
 component: CaseStudyComponent },

 { path: 'case-study-explore', 
 title: 'DevTroop | CaseStudy Explore',
 component: CaseStudyExploreComponent },

 { path: 'blog', 
 title: 'DevTroop | Letest Blog',
 component: BlogComponent },

 { path: 'members', 
 title: 'DevTroop | Members',
 component: MembersComponent },

 { path: 'cta-modal', 
 title: 'DevTroop | CTA-Modal',
 component: CtaModalComponent },

 { path: 'faq', 
 title: 'DevTroop | FAQs',
 component: FaqComponent },

 { path: 'gaq-modal',
 title: 'DevTroop | Get A Quete',
 component: GaqModalComponent,  } ,

 { path: 'privacy-policy',
 title: 'DevTroop | Privacy Policy',
 component: PrivacyPolicyComponent,  } ,

 { path: 'services-explore',
 title: 'DevTroop | Services Explore',
 component: ServicesExploreComponent,  } ,

 { path: 'terms-and-conditions',
 title: 'DevTroop | T&Cs.',
 component: TermsAndConditionsComponent,  } ,

 { path: '**', component: HomeComponent },



 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration : 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
