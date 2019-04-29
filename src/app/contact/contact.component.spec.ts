import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecordsService } from '../services/records.service';

describe('RecordsService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [RecordsService]
      }));

       it('should be created', () => {
        const service: RecordsService = TestBed.get(RecordsService);
        expect(service).toBeTruthy();
       });

  /*     it('should have getData function', () => {
        const service: RecordsService = TestBed.get(RecordsService);
        expect(service.getData).toBeTruthy();
       });
  */
// tslint:disable-next-line:eofline
});