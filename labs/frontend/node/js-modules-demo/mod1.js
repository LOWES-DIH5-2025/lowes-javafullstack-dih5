// Name Export
export const greetings = "Hello!!!";

// Default Export
export default 'testing';

// Rename Export
const greetings1 = "Welcome to JS Modules";
export {greetings1 as test1};

// List Export
const greetings2 = "Thank you!!!"
export {greetings1, greetings2};
