import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecordsService } from '../services/records.service';
import { CourseData } from '../interface/CourseData';

describe('Contact Service', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [RecordsService]
      }));

       it('Record Service should be created', () => {
        const service: RecordsService = TestBed.get(RecordsService);
        expect(service).toBeTruthy();
       });

       it('be able to retrieve info from the API GET length', () => {
        const service1: RecordsService = TestBed.get(RecordsService);

        service1.getServer().subscribe(get => {
            expect(get.length).toBe(2);
            console.log('Length: ' + get.length);
        });

      //  const request = httpMock.expectOne( `${service.ROOT_URl}/posts`);
      //  expect(request.request.method).toBe('GET');
      //  request.flush(dummyPosts);
        });

});
