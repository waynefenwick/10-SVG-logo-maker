// TEST 1: Passed
// const Text = require('./text');

// test('Text should return the correct SVG element', () => {
//      const text = new Text('SVG', 'red');
//      const svgElement = text.getSvgElement();

//      expect(svgElement).toBe('<text x="128" y="157" text-anchor="middle" fill="red" font-size="30">SVG</text>');
// });


// TEST 2: Passed
const Text = require('./text');

describe('Text', () => {
     test('getSvgElement() should return the correct SVG element string', () => {
          const text = 'SVG';
          const textColor = 'blue';

          const textObj = new Text(text, textColor);

          const expectedSvgElement = `<text x="128" y="157" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text>`;
          const actualSvgElement = textObj.getSvgElement();

          expect(actualSvgElement).toEqual(expectedSvgElement);
     });
});

