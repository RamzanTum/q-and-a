import { ComponentFixture } from '@angular/core/testing';

export function expectToBeHidden<T>(element: ComponentFixture<T>) {
  expect(element.nativeElement.firstChild).not.toHaveClass('is-active');
}
