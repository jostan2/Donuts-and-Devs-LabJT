import { Component, OnInit } from '@angular/core';

import { CSHallOfFame } from '../Interface/cshall-of-fame';
import { DonutDevService } from '../donut-dev.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-famous-people-detail',
  templateUrl: './famous-people-detail.component.html',
  styleUrls: ['./famous-people-detail.component.css']
})
export class FamousPeopleDetailComponent implements OnInit {

  displayPerson:CSHallOfFame = {} as CSHallOfFame

  constructor(private personService:DonutDevService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));

    this.personService.getOnePerson(id).subscribe(
      (result:CSHallOfFame) => {
        this.displayPerson = result;
        // console.log(result);
        // console.log(id);
      });
    }


}
