import { render, screen } from '@testing-library/angular';
import { NavbarComponent } from './navbar.component';


describe('NavbarComponent', () => {
  it('should notify parent when login clicked', async () => {
    let emitted = false;
    const { fixture, detectChanges } = await render(NavbarComponent)
    fixture.componentInstance.loginClicked.subscribe(() => (emitted = true));

    screen.getByText('Login').click();
    detectChanges();

    expect(screen.getByText('Logout')).toBeVisible()
    expect(emitted).toBe(true);
  });
});
