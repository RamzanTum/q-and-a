import {QuestionListItemComponent} from './question-list-item.component';
import {render, screen} from "@testing-library/angular";
import {Question} from "../model/Question";
describe('QuestionListItemComponent', () => {

  it('should create', async () => {
    await render(QuestionListItemComponent, {
      componentProperties: {
        question: {
          question: "This is the question.",
        } as Question,
      },
    });

    expect(screen.getByText('This is the question.')).toBeTruthy();
  });
});
