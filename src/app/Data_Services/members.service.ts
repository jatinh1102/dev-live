import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  members_data =[
    {
      img: "../assets/img/avtar-1.png",
      name: " Nazar H.",
      position: 'Web Designer',
      content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      media: "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper erat pretium et quisque. Diam at pur....",
    },

    {
      img: "../assets/img/avtar-2.png",
      name: " Ankur R.",
      position: 'Website Developer',
      content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book', 
      media: "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper erat pretium et quisque. Diam at pur....",
    },

    {
      img: "../assets/img/avtar-3.png",
      name: " Capt. Trunk",
      position: 'Angular Developer',
      content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      media: "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper erat pretium et quisque. Diam at pur....",
    },

    {
      img: "../assets/img/avtar-4.png",
      name: " Roderick Decker",
      position: 'Technical Support Engineer',
      content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      media: "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper erat pretium et quisque. Diam at pur....",
    },
    
    {
      img: "../assets/img/avtar-1.png",
      name: " Hellow",
      position: 'BDE',
      content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      media: "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper erat pretium et quisque. Diam at pur....",
    },

    
    ]

}
