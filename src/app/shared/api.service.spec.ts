import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ],
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
    service.offset = 0;
    service.searchQuery = '';
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    service = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  const rowGifs = [
    {
      images: {
        fixed_height: {
          url: "https://media1.giphy.com/media/1mimcEKz15HFD37oAE/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Originals Love GIF by Nyle DiMarco"
    },
    {
      images: {
        fixed_height: {
          url: "https://media1.giphy.com/media/xUOxeXceh9V4udGEFO/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "I Love You Animation GIF by nic a"
    },
    {
      images: {
        fixed_height: {
          url: "https://media2.giphy.com/media/xT9DPn5xVpLJk8ryzm/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Puppy Dancing GIF by Chibird"
    },
    {
      images: {
        fixed_height: {
          url: "https://media3.giphy.com/media/WQOGYy0QiKbaKKFo09/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Get Along Unity GIF by INTO ACTION"
    },
    {
      images: {
        fixed_height: {
          url: "https://media1.giphy.com/media/4K01K30ubqYhxI1eqV/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Faint Fainting GIF by Sesame Street"
    },
    {
      images: {
        fixed_height: {
          url: "https://media3.giphy.com/media/JRscF6wJGHaWspkGH4/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Voting Black Lives Matter GIF by INTO ACTION"
    },
    {
      images: {
        fixed_height: {
          url: "https://media0.giphy.com/media/SslVQSC5UugiBcViuh/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Showtime Ally GIF by Desus & Mero"
    },
    {
      images: {
        fixed_height: {
          url: "https://media0.giphy.com/media/eivyYNE6Tae5EuRjAM/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "African American Race GIF by INTO ACTION"
    },
    {
      images: {
        fixed_height: {
          url: "https://media2.giphy.com/media/3oz8xAFtqoOUUrsh7W/200.gif?cid=9a1510be8c7a8260d49fa18f3ad416342db269ab1ea69e48&rid=200.gif"
        }
      },
      title: "Flower Flex GIF by GIPHY Studios Originals"
    },
  ];

  it('should have getTrendingGifs()', () => {
    service.getTrendingGifs().subscribe((res) => {
      expect(res).toEqual(rowGifs);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/trending?limit=9&offset=${service.offset}&api_key=${environment.apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(rowGifs);
  });

  it('should correct work paginatePage', () => {
    expect(service.offset).toEqual(0);
    service.paginatePage();
    expect(service.offset).toEqual(9);
  });

  it('should correct work resetPaginatePage', () => {
    expect(service.offset).toEqual(0);
    service.paginatePage();
    expect(service.offset).toEqual(9);
    service.resetPaginatePage();
    expect(service.offset).toEqual(0);
  });

  it('should correct work changeSearchQuery', () => {
    expect(service.searchQuery).toEqual('');
    service.changeSearchQuery('test');
    expect(service.searchQuery).toEqual('test');
  });

  it('should correct work resetSearchQuery', () => {
    expect(service.searchQuery).toEqual('');
    service.changeSearchQuery('test');
    expect(service.searchQuery).toEqual('test');
    service.resetSearchQuery();
    expect(service.searchQuery).toEqual('');
  });

  it('should have searchGifs()', () => {
    service.changeSearchQuery('bat');
    service.searchGifs().subscribe((res) => {
      expect(res).toEqual(rowGifs);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/search?limit=9&q=${service.searchQuery}&offset=${service.offset}&api_key=${environment.apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(rowGifs);
  });
});
