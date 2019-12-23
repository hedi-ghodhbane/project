import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServComponent } from './detail-serv.component';

describe('DetailServComponent', () => {
  let component: DetailServComponent;
  let fixture: ComponentFixture<DetailServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
