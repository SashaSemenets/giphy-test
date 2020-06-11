import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifContentShimmerComponent } from './gif-content-shimmer.component';

describe('GifContentShimmerComponent', () => {
  let component: GifContentShimmerComponent;
  let fixture: ComponentFixture<GifContentShimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifContentShimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifContentShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have gif-card-shimmer block', () => {
    expect(fixture.nativeElement.querySelector('.gif-card-shimmer')).toBeTruthy();
  });

  it('should have gif-card-shimmer__img block', () => {
    expect(fixture.nativeElement.querySelector('.gif-card-shimmer__img')).toBeTruthy();
  });

  it('should have gif-card-shimmer__text block', () => {
    expect(fixture.nativeElement.querySelector('.gif-card-shimmer__text')).toBeTruthy();
  });

  it('should have ggif-card-shimmer__title block', () => {
    expect(fixture.nativeElement.querySelector('.gif-card-shimmer__title')).toBeTruthy();
  });
});
