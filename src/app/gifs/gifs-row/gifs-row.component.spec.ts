import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsRowComponent } from './gifs-row.component';

describe('GifsRowComponent', () => {
  let component: GifsRowComponent;
  let fixture: ComponentFixture<GifsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
