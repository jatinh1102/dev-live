import { Component, OnInit } from '@angular/core';
import { CareersInfoService } from '../Data_Services/careers-info.service';
import { CareersDetailsService } from '../Data_Services/careers-details.service';

@Component({
  selector: 'app-careers-info',
  templateUrl: './careers-info.component.html',
  styleUrls: ['./careers-info.component.css']
})
export class CareersInfoComponent implements OnInit {

  constructor(private _service: CareersInfoService,
    private _details: CareersDetailsService
  ) { }
  careers_info: any[] = [];
  careers_detils: any;
  ngOnInit(): void {
    this.careers_info = this._service.careers_info;
  }

  careers_details(value:any){
    this._details.set_careers_details(value);
  }
} 
