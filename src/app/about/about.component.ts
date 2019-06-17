import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { Subscription } from 'rxjs';
import { Employee } from '../interface/employeeDetails.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, OnDestroy {
  employeeData: Employee;
  records: Subscription;

  constructor(private myfirstservice: RecordsService) { }

  ngOnInit() {
    this.empinfo();
  }

  empinfo() {
    this.records = this.myfirstservice.getInfo().subscribe((data: Employee) => {
      this.employeeData = data;
      console.log('We got data', this.employeeData);
    });
    /* Json data for myjson website
    [
      {
        "name": "Vilas",
        "online": "true23"
      },
      {
        "name": "kailas",
        "online": "false23"
      }
    ]
    */
  }
  ngOnDestroy(): void {
    this.records.unsubscribe();
  }

}
