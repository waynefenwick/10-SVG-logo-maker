// TEST 1: Passed
test('render() should return the correct SVG element string with the given shape color, width, and height', () => {
  const width = 100;
  const height = 100;
  const shape = new Square(width, height, 'green', true, 'black');
  expect(shape.getSvgElement()).toEqual('<rect fill="green" x="48" y="72" width="100" height="100" stroke="black" stroke-width="2"/>');
});


// TEST 1: Passed
// const Square = require('./square');

// describe('Square', () => {
//   test('constructor should set the properties correctly', () => {
//     const width = 20;
//     const height = 20;
//     const shapeColor = 'blue';
//     const border = true;
//     const borderColor = 'green';

//     const square = new Square(width, height, shapeColor, border, borderColor);

//     expect(square.width).toEqual(width);
//     expect(square.height).toEqual(height);
//     expect(square.shapeColor).toEqual(shapeColor);
//     expect(square.border).toEqual(border);
//     expect(square.borderColor).toEqual(borderColor);
//   });
// });

// TEST 2: Passed
const Square = require('./square');

describe('Square', () => {
  test('getSvgElement() should return the correct SVG element string', () => {
    const width = 20;
    const height = 20;
    const shapeColor = 'blue';
    const border = true;
    const borderColor = 'green';

    const square = new Square(width, height, shapeColor, border, borderColor);

    const expectedSvgElement = `<rect fill="${shapeColor}" x="48" y="72" width="${width}" height="${height}" stroke="${borderColor}" stroke-width="2"/>`;
    const actualSvgElement = square.getSvgElement();

    expect(actualSvgElement).toEqual(expectedSvgElement);
  });
});

