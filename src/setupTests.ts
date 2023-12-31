// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import worker from '../mocks/handlers';
beforeAll(() => {
  worker.listen();
});
afterEach(() => {
  worker.resetHandlers();
});
afterAll(() => {
  worker.close();
});
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
