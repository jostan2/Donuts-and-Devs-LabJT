import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DonutDetail } from './Interface/donut-detail';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPeopleDetailComponent } from './famous-people-detail/famous-people-detail.component';
import { DonutList } from './Interface/donut-list';
import { CSHallOfFame } from './Interface/cshall-of-fame';

@Injectable({
  providedIn: 'root'
})
export class DonutDevService {
  baseURL:string;

  constructor(private http:HttpClient, @Inject("BASE_URL") private url:string) {
    this.baseURL=url;
  }

  getDonutList():Observable<DonutList[]>{
    return this.http.get<DonutList[]>(this.baseURL + "api/donuts")
  }

  getOneDonut(id:number): Observable<DonutDetail> {
    return this.http.get<DonutDetail>(this.baseURL + "api/donuts/" + id); //get one donut by id.
  }



  getPersonList():Observable<CSHallOfFame[]>{
    return this.http.get<CSHallOfFame[]>(this.baseURL + "api/computersciencehalloffames");
  }

  getOnePerson(id:number): Observable<CSHallOfFame> {
    console.log(id);
    return this.http.get<CSHallOfFame>(this.baseURL + "api/computersciencehalloffames/" + id);
  }
}
