import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListSormeresComponent } from './page-list-sormeres.component';

describe('PageListSormeresComponent', () => {
  let component: PageListSormeresComponent;
  let fixture: ComponentFixture<PageListSormeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListSormeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListSormeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
