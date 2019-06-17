import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'my-test-app';

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}

const settings = {timestampsInSnapshots: true};
  const config = {
    apiKey: 'AIzaSyA942azWgj7gyfo5gFG8d4SO6EkPLMERak',
    authDomain: 'angular6-4d24d.firebaseapp.com',
    databaseURL: 'https://angular6-4d24d.firebaseio.com/',
    projectId: 'angular6-4d24d',
    storageBucket: 'gs://angular6-4d24d.appspot.com',
  };

