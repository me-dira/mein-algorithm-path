import factory from './index.js';

describe('Factory tests', () => {
  test('Factory should exists', () => {
    expect(factory).toBeTruthy();
  });

  test('Fibonacci should exist', (done) => {
    factory('algorithms:fibonacci', (fibonacci) => {
      if (fibonacci) return done();
      return done('We were not able to get fibonacci from factory');
    });
  });

  test('Fibonacci with memorization exists', (done) => {
    factory('algorithms:fibMemo', (fibMemo) => {
      if (fibMemo) return done();
      return done('Fib memo is not loaded there is a problem');
    });
  });
});
