import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RecordsService } from './records.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


describe('RecordsService', () => {

  let injector: TestBed;
  let service: RecordsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [RecordsService]
    });
  }));

  injector = getTestBed();

  service = injector.get(service);

  httpMock = injector.get(HttpTestingController);

  it('should be created', () => {
    const service1: RecordsService = TestBed.get(RecordsService);
    expect(service1).toBeTruthy();
});

});
