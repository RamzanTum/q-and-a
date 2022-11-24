import { TeacherProfileComponent } from './teacher-profile.component';
import { render, screen } from "@testing-library/angular";
import { QuestionService } from "../service/question/question.service";
import { FormsModule } from "@angular/forms";
import { Teacher } from "../model/Teacher";
import { createMock, Mock } from '@testing-library/angular/jest-utils';
import { Question } from "../model/Question";
import { of, throwError } from "rxjs";
import userEvent from '@testing-library/user-event';
import { HttpErrorResponse } from "@angular/common/http";

describe('TeacherProfileComponent', () => {
  it('should display teacher information', async () => {
    await renderComponent();

    expect(screen.getByText('Jeff')).toBeVisible();
    expect(screen.getByText('Subjects: Math')).toBeVisible();
  });

  it('should be possible to submit a question', async () => {
    const { detectChanges, questionService } = await renderComponent();
    questionService.submitQuestion.mockReturnValue(of({} as Question));

    const questionTextArea: HTMLTextAreaElement = screen.getByPlaceholderText('Question');
    const submitButton = screen.getByRole('button', {
      name: /Submit your question/i,
    });

    await userEvent.type(questionTextArea, 'What is the purpose of life?');
    await userEvent.click(submitButton);

    detectChanges();

    let infoMessage = screen.getByText('Question was submitted successfully!');
    expect(infoMessage).toBeVisible();
    expect(infoMessage).toHaveClass('is-success');
    expect(questionTextArea.value).toEqual('');
  });

  it('should be possible to see error message on submit fail', async () => {
    const { questionService, detectChanges } = await renderComponent();
    questionService.submitQuestion.mockReturnValueOnce(
      throwError(() => {
        new HttpErrorResponse({
          error: 'Your request sucks!',
          status: 400,
          statusText: 'BAD REQUEST',
        });
      })
    );

    const textAreaDisplayValue = 'This is questioner question';
    const questionTextArea = screen.getByPlaceholderText('Question');
    const submitButton = screen.getByRole('button', {
      name: /Submit your question/i,
    });

    await userEvent.type(questionTextArea, textAreaDisplayValue);
    await userEvent.click(submitButton);

    detectChanges();

    const errorMessage = screen.getByText('Oops, something went wrong. Please try again later.');
    expect(errorMessage).toBeVisible();
    expect(errorMessage).toHaveClass('is-danger');
  });

  it('should not be possible to submit an empty question', async () => {
    const { questionService } = await renderComponent();
    const submitButton = screen.getByRole('button', {
      name: /Submit your question/i,
    });

    await userEvent.click(submitButton);

    expect(submitButton).toBeDisabled()
    expect(questionService.submitQuestion).toHaveBeenCalledTimes(0);
  });

  async function renderWithMocks(questionService: Mock<QuestionService>) {
    const { detectChanges } = await render(TeacherProfileComponent, {
      componentProperties: {
        teacher: {
          id: 1,
          name: 'Jeff',
          subjects: "Math"
        } as Teacher,
      },
      imports: [FormsModule],
      componentProviders: [
        {
          provide: QuestionService,
          useValue: questionService,
        },
      ],
    });

    return { detectChanges }
  }

  function createMocks() {
    const questionService: Mock<QuestionService> = createMock(QuestionService);
    return { questionService };
  }

  async function renderComponent() {
    const { questionService } = createMocks()
    const { detectChanges } = await renderWithMocks(questionService)
    return { questionService, detectChanges };
  }
});
