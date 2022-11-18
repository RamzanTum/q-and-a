import { QuestionBrowserComponent } from './question-browser.component';
import { of } from "rxjs";
import { Question } from "../model/Question";
import { render, screen } from "@testing-library/angular";
import { createMock, Mock } from "@testing-library/angular/jest-utils";
import { QuestionService } from "../service/question/question.service";
import { QuestionListItemComponent } from "../question-list-item/question-list-item.component";

describe('QuestionBrowserComponent', () => {
  it('should show all questions if selected all questions option', async () => {
    const questionService: Mock<QuestionService> = createMock(QuestionService);
    questionService.loadQuestions.mockReturnValue(
      of([
        {id: 1, question: 'This is the question'} as Question,
        {id: 2, question: 'This is the second question'} as Question
      ])
    );
    const { detectChanges } = await renderWithMock(questionService);

    detectChanges();

    expect(screen.getByText('This is the question')).toBeVisible()
    expect(screen.getByText('This is the second question')).toBeVisible()
  });

  async function renderWithMock(
    questionService: Mock<QuestionService>,
  ) {
    const { detectChanges } = await render(QuestionBrowserComponent, {
      componentProviders: [
        {
          provide: QuestionService,
          useValue: questionService,
        },
      ],
      declarations: [
        QuestionListItemComponent,
      ],
    });

    return { detectChanges };
  }
});
