// import the functions from their source files
const assertEqual = require('../assertEqual')
const head = require('../head')

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 4);