import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe } from '@angular/core'
import { RecordsService } from './records.service';

import { MaterialModule } from '../config/material';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { pipe } from 'rxjs';

@pipe({
  name : 'Ayo'
})

describe('RecordsService', () => {

  let component: RecordsService;
  let fixture: ComponentFixture<RecordsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsService, HeaderComponent, FooterComponent ],
      imports: [MaterialModule],
      providers: [RecordsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: RecordsService = TestBed.get(RecordsService);
    expect(service).toBeTruthy();
  });

});
