import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ApiService } from './shared/api.service';
import { GifComponent } from './gifs/gif/gif.component';
import { GifContentShimmerComponent } from './gifs/gif-content-shimmer/gif-content-shimmer.component';
import { GifsRowComponent } from './gifs/gifs-row/gifs-row.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GifComponent,
        AppComponent,
        GifContentShimmerComponent,
        GifsRowComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [ ApiService ]
    }).compileComponents();
    apiService = TestBed.get(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct navbar title', () => {
    expect(fixture.nativeElement.querySelector('.navbar-brand').innerText).toEqual('Giphy-test');
  });

  it('should have correct searchbar', () => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      expect(el.value).toBe('');

      el.value = 'someValue';
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.searchQuery).toBe('someValue');
    });

    fixture.detectChanges();

    spyOn(component, 'onSearch');
    document.getElementById('search-btn').click();
    expect(component.onSearch).toHaveBeenCalledTimes(1);
  });

  it('should have gif-card-shimmer block', () => {
    expect(fixture.nativeElement.querySelector('.gif-card-shimmer')).toBeTruthy();
  });

  it('should have gifs-container section', () => {
    expect(fixture.nativeElement.querySelector('legend').innerText).toEqual('Trending');
  });

  it('should have spinner block', () => {
    expect(fixture.nativeElement.querySelector('.spinner-container')).toBeTruthy();
  });

  it('should call getTrendingGifs when component initialize', () => {
    spyOn(component, 'getTrendingGifs');
    component.ngOnInit();
    expect(component.getTrendingGifs).toHaveBeenCalled();
  });

  it('should call handleScroll when component initialize', () => {
    spyOn(component, 'handleScroll');
    component.ngOnInit();
    expect(component.handleScroll).toHaveBeenCalled();
  });
});
