import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;
  const gif = {
    images: {
      fixed_height: {
        url: 'https://media3.giphy.com/media/VIJXf13u6ZHNaIakLX/200.gif?cid=9a1510bea167de24647c5a9a8abe67369709e878fbe5371e&rid=200.gif'
      }
    },
    title: "Gay Pride GIF by INTO ACTION"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    component.gif = gif;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should have correct display input params', () => {
    it('should have correct display image', () => {
      expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toEqual(gif.images.fixed_height.url);
      expect(fixture.nativeElement.querySelector('img').getAttribute('alt')).toEqual(gif.title);
    });
    it('should have correct display figcaption', () => {
      expect(fixture.nativeElement.querySelector('figcaption').innerText).toEqual(gif.title);
    });
  });
});
