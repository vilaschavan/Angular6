import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { CourseData } from '../interface/courseData';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://api.myjson.com/bins/18z5mg');
  }

  storeServer(servers: any[]) {
    return this.http.post('https://udemy-aee88.firebaseio.com/data.json', servers);
  }

  getServer(): Observable <CourseData[]> {
    return this.http.get('https://udemy-aee88.firebaseio.com/data/-Lh9k2t3I__kTAmi6ATT.json')
      .pipe(
        map((res: CourseData[]) => res),
        );
  }

}
