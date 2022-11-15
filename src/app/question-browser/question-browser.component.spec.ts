import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBrowserComponent } from './question-browser.component';

describe('QuestionBrowserComponent', () => {
  let component: QuestionBrowserComponent;
  let fixture: ComponentFixture<QuestionBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
