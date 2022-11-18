import { Component, OnInit } from '@angular/core';
import { DonutDevService } from '../donut-dev.service';
import { CSHallOfFame } from '../Interface/cshall-of-fame';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  persons:CSHallOfFame[] = [];

  constructor(private peopleDb:DonutDevService) {
    this.getPersonList()
   }

  ngOnInit(): void {
  }

  getPersonList()
  {
    this.peopleDb.getPersonList().subscribe(
    (results:CSHallOfFame[]) => {
      this.persons = results;
    })
  }
}
