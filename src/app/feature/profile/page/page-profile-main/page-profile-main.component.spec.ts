import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileMainComponent } from './page-profile-main.component';

describe('PageProfileMainComponent', () => {
  let component: PageProfileMainComponent;
  let fixture: ComponentFixture<PageProfileMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfileMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
