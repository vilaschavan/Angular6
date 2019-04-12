import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {

  records = {};

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://api.myjson.com/bins/18z5mg');
  }

  getData() {
    return [
      {
        name : 'Vilas',
        online : true
      },
      {
        name : 'Binod',
        online : false
      },
      {
        name : 'Grish',
        online : true
      },
    ];
  }
}
