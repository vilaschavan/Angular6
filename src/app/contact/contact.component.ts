import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  records = {};

  constructor(private myfirstservice: RecordsService) { }

  ngOnInit() {
    this.records = this.myfirstservice.getData();
    //  console.log(this.records);
  }

}
