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
});
