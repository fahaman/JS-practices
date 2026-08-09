// This file exports utility functions that can be reused throughout the application.

// Example utility function: adds two numbers
export const add = (a, b) => {
    return a + b;
};

// Example utility function: subtracts two numbers
export const subtract = (a, b) => {
    return a - b;
};

// Example utility function: multiplies two numbers
export const multiply = (a, b) => {
    return a * b;
};

// Example utility function: divides two numbers
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};