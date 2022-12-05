// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Define window.scrollTo function for tests. 
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });