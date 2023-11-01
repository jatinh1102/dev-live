import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyServiceService {

  constructor() { }
  
  case_details = new BehaviorSubject('TransitFare')

  case_study_data = [
  {
    img: "../assets/img/Transitfare.png",
    title: "TransitFare",
    content: "Public transportation is a vital aspect of urban life, providing a convenient and eco-friendly way to move around cities. Whether you're a daily commuter or an occasional traveler, understanding transit fare is crucial for a smooth and cost-effective journey.",
  },
  {
    img: "../assets/img/UseTransit.png",
    title: "UseTransit",
    content: "Transit systems play a pivotal role in urban areas, offering a sustainable solution to alleviate traffic congestion, reduce carbon emissions, and provide accessible transportation for communities. Here are some key aspects to consider:"
  },
  {
    img: "../assets/img/Greeteat.png",
    title: "Greeteat",
    content: "In a world where our lives are constantly on the move, finding the perfect dining experience can be a daunting task. That's where Greeteat comes in – your ultimate companion for discovering and savoring the finest culinary delights. Greeteat isn't just another dining app; "
  },
  {
    img: "../assets/img/Transitfare.png",
    title: "TransitFare1",
    content: "Public transportation is a vital aspect of urban life, providing a convenient and eco-friendly way to move around cities. Whether you're a daily commuter or an occasional traveler, understanding transit fare is crucial for a smooth and cost-effective journey.",
  },
  {
    img: "../assets/img/UseTransit.png",
    title: "UseTransit",
    content: "Transit systems play a pivotal role in urban areas, offering a sustainable solution to alleviate traffic congestion, reduce carbon emissions, and provide accessible transportation for communities. Here are some key aspects to consider:"
  },
  {
    img: "../assets/img/Greeteat.png",
    title: "Greeteat",
    content: "In a world where our lives are constantly on the move, finding the perfect dining experience can be a daunting task. That's where Greeteat comes in – your ultimate companion for discovering and savoring the finest culinary delights. Greeteat isn't just another dining app; "
  },
  {
    img: "../assets/img/Transitfare.png",
    title: "TransitFare2",
    content: "Public transportation is a vital aspect of urban life, providing a convenient and eco-friendly way to move around cities. Whether you're a daily commuter or an occasional traveler, understanding transit fare is crucial for a smooth and cost-effective journey.",
  },
  {
    img: "../assets/img/UseTransit.png",
    title: "UseTransit",
    content: "Transit systems play a pivotal role in urban areas, offering a sustainable solution to alleviate traffic congestion, reduce carbon emissions, and provide accessible transportation for communities. Here are some key aspects to consider:"
  },
  {
    img: "../assets/img/Greeteat.png",
    title: "Greeteat",
    content: "In a world where our lives are constantly on the move, finding the perfect dining experience can be a daunting task. That's where Greeteat comes in – your ultimate companion for discovering and savoring the finest culinary delights. Greeteat isn't just another dining app; "
  },
  {
    img: "../assets/img/Transitfare.png",
    title: "TransitFare3",
    content: "Public transportation is a vital aspect of urban life, providing a convenient and eco-friendly way to move around cities. Whether you're a daily commuter or an occasional traveler, understanding transit fare is crucial for a smooth and cost-effective journey.",
  },
  {
    img: "../assets/img/UseTransit.png",
    title: "UseTransit",
    content: "Transit systems play a pivotal role in urban areas, offering a sustainable solution to alleviate traffic congestion, reduce carbon emissions, and provide accessible transportation for communities. Here are some key aspects to consider:"
  },
  {
    img: "../assets/img/Greeteat.png",
    title: "Greeteat",
    content: "In a world where our lives are constantly on the move, finding the perfect dining experience can be a daunting task. That's where Greeteat comes in – your ultimate companion for discovering and savoring the finest culinary delights. Greeteat isn't just another dining app; "
  },
  ]
  
  case_study_course = {
    Edev: "ECommerce Development",
    UI: "UI/UX Design",
    AppDev: "Mobile App development",
    AngularDev: "Angular Developnent",
    Grapic: "Graphics & Web",
    DB: "Mongo DB"
  }

  case_study_details(){
    let case_data:any;
    let res:any;

    this.case_details.subscribe((data:any)=> res = data)

    this.case_study_data.forEach((data:any)=>{
      if(data.title == res){
        case_data = data;
      }
    })
    return case_data
  }

}