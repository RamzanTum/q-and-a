import { TeacherProfileComponent } from './teacher-profile.component';
import { render, screen } from "@testing-library/angular";
import { QuestionService } from "../service/question/question.service";
import { createMock } from "@testing-library/angular/jest-utils";
import { FormsModule } from "@angular/forms";
import { Teacher } from "../model/Teacher";

describe('TeacherProfileComponent', () => {
  it('should display teacher information', async () => {
    await renderComponent();

    expect(screen.getByText('Jeff')).toBeVisible();
    expect(screen.getByText('Subjects: Math')).toBeVisible();
  });

  it('should ', async () => {
    await renderComponent();

    expect(screen.getByText('Jeff')).toBeVisible();
    expect(screen.getByText('Subjects: Math')).toBeVisible();
  });

  async function renderComponent() {
    const { container, detectChanges } = await render(TeacherProfileComponent, {
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
          useValue: createMock(QuestionService),
        },
      ],
    });

    return { container, detectChanges }
  }
});
