import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsRowComponent } from './gifs-row.component';

describe('GifsRowComponent', () => {
  let component: GifsRowComponent;
  let fixture: ComponentFixture<GifsRowComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsRowComponent);
    component = fixture.componentInstance;
    component.rowGifs = rowGifs;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct length input params', () => {
    expect(fixture.nativeElement.querySelectorAll('.col-lg-4').length).toEqual(rowGifs.length);
  });
});
