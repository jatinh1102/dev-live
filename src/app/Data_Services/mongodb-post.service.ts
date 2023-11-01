import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongodbPostService {

  constructor(private _http: HttpClient) { }

  Call_To_Action = "http://localhost:3000/api/Call_To_Action";
  Get_Qute = "http://localhost:3000/api/Get_Qute";
  contact_us = "http://localhost:3000/api/contact_us";
  career_info = "http://localhost:3000/api/career_info";

  mongodb_Call_To_Action(Data: any):Observable<any> {
    return this._http.post(this.Call_To_Action, Data)
  }

  mongodb_Get_Qute(Data: any){
    return this._http.post(this.Get_Qute, Data)
  }

  mongodb_contact_us(Data: any){
    return this._http.post(this.contact_us, Data)
  }

  mongodb_career_info(Data:any){
    console.log(Data)
    return this._http.post(this.career_info, Data)
  }
}
