import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPeopleDetailComponent } from './famous-people-detail.component';

describe('FamousPeopleDetailComponent', () => {
  let component: FamousPeopleDetailComponent;
  let fixture: ComponentFixture<FamousPeopleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPeopleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousPeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
