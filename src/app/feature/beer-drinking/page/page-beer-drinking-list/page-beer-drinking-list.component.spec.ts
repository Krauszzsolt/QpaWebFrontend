import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBeerDrinkingListComponent } from './page-beer-drinking-list.component';

describe('PageBeerDrinkingListComponent', () => {
  let component: PageBeerDrinkingListComponent;
  let fixture: ComponentFixture<PageBeerDrinkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBeerDrinkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBeerDrinkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
