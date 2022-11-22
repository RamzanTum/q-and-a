import { PennyToDollarPipe } from './penny-to-dollar.pipe';

describe('PennyToDollarPipe', () => {
  it('should transform pennies to dollars', () => {
    const pipe = new PennyToDollarPipe();

    const result = pipe.transform(1000);

    expect(result).toBe(10);
  });
});
