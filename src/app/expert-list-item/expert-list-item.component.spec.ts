import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertListItemComponent } from './expert-list-item.component';

describe('ExpertListItemComponent', () => {
  let component: ExpertListItemComponent;
  let fixture: ComponentFixture<ExpertListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
