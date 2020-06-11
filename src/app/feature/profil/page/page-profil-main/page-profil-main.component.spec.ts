import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilMainComponent } from './page-profil-main.component';

describe('PageProfilMainComponent', () => {
  let component: PageProfilMainComponent;
  let fixture: ComponentFixture<PageProfilMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfilMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfilMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
