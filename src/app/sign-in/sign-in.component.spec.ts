import { SignInComponent } from './sign-in.component';
import { render, screen } from '@testing-library/angular';
import { expectToBeHidden } from '../test-utils/visibility-checker';

describe('SignInComponent', () => {
  it('should close dialog when clicked on x', async () => {
    const { fixture, detectChanges } = await render(SignInComponent, {
      componentProperties: {
        showDialog: true
      }
    });

    screen.getByTestId('close-dialog-button').click();
    detectChanges()

    expectToBeHidden(fixture);
  });
});
