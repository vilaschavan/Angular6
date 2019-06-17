import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';

export interface CourseData {
  name: string;
  capacity: number;
  id: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})

export class ContactComponent {

  public courseDatas: CourseData[];

  constructor(private serverService: RecordsService) { }

  servers = [
    {
      name : 'Live Server',
      capacity : '10',
      id : '1'
    },
    {
      name : 'Test Server',
      capacity : '100',
      id : '2'
    },
  ];

  onSave() {
    this.serverService.storeServer(this.servers)
      .subscribe(
        (response) => console.log(Response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.serverService.getServer().subscribe( data => {
       console.log('My data:');
       this.courseDatas = data;
    });
  }


}
