// TEST 1: Passed -- made an adjustment to coding and added render
const Circle = require('./circle');

test('render() should return the correct SVG element string with the given shape color and radius', () => {
     const radius = 50; // Set the desired radius for the circle
     const shape = new Circle(radius, 'red', true, 'black'); // Provide the required parameters
     expect(shape.render()).toEqual('<circle fill="red" cx="125" cy="145" r="50" stroke="black" stroke-width="2"/>');
});



// TEST 2: Passed
// const Circle = require('./circle');

// describe('Circle', () => {

// test('constructor should set the properties correctly', () => {
//      const radius = 10;
//      const shapeColor = 'red';
//      const border = true;
//      const borderColor = 'black';

//      const circle = new Circle(radius, shapeColor, border, borderColor);

//      expect(circle.radius).toEqual(radius);
//      expect(circle.shapeColor).toEqual(shapeColor);
//      expect(circle.border).toEqual(border);
//      expect(circle.borderColor).toEqual(borderColor);
//      });
// });

// TEST 3: Passed
// const Circle = require('./circle');

// describe('Circle', () => {
//      test('getSvgElement() should return the correct SVG element string', () => {
//           const radius = 10;
//           const shapeColor = 'red';
//           const border = true;
//           const borderColor = 'black';

//           const circle = new Circle(radius, shapeColor, border, borderColor);

//           const expectedSvgElement = `<circle fill="${shapeColor}" cx="125" cy="145" r="${radius}" stroke="${borderColor}" stroke-width="2"/>`;
//           const actualSvgElement = circle.getSvgElement();

//           expect(actualSvgElement).toEqual(expectedSvgElement);
//      });
// });