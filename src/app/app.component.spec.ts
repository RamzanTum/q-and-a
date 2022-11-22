import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { QuestionService } from "./service/question/question.service";
import { TeacherService } from "./service/teachers/teacher.service";
import { createMock, Mock } from '@testing-library/angular/jest-utils';
import { SignInComponent } from "./sign-in/sign-in.component";
import { MockComponent } from "ng-mocks";
import { QuestionBrowserComponent } from "./question-browser/question-browser.component";
import { render, screen } from '@testing-library/angular';
import { of } from "rxjs";
import { Question } from "./model/Question";
import userEvent from "@testing-library/user-event";
import { NavbarComponent } from "./navbar/navbar.component";
import { QuestionListItemComponent } from "./question-list-item/question-list-item.component";

describe('AppComponent', () => {
  it('should show all questions when user navigates to question browser component', async () => {
    const { questionService, container } = await renderComponent();
    questionService.loadQuestions.mockReturnValue(
      of([{} as Question, {} as Question])
    );

    const allQuestionsLink = screen.getByText('Questions');

    await userEvent.click(allQuestionsLink);

    expect(container.querySelectorAll('app-question-browser').length).toBe(1);
    expect(container.querySelectorAll('app-question-list-item').length).toBe(2);
  });

  async function renderComponent() {
    const questionService: Mock<QuestionService> = createMock(QuestionService);
    const teacherService: Mock<TeacherService> = createMock(TeacherService);

    const { container } = await render(AppComponent, {
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'questions', component: QuestionBrowserComponent },
        ]),
      ],
      declarations: [
        QuestionBrowserComponent,
        QuestionListItemComponent,
        NavbarComponent,
        MockComponent(SignInComponent),
      ],
      componentProviders: [
        {
          provide: QuestionService,
          useValue: questionService,
        },
        {
          provide: TeacherService,
          useValue: teacherService,
        },
      ],
    });

    return { container, questionService };
  }
});
