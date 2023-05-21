const inquirer = require('inquirer');
const fs = require('fs');

// Shape class
class Shape {
     constructor(shapeColor, border, borderColor) {
          this.shapeColor = shapeColor;
          this.border = border;
          this.borderColor = borderColor;
     }

     getSvgElement() {
          throw new Error('Method not implemented');
     }
}

// Circle class, inheriting from Shape
class Circle extends Shape {
     constructor(radius, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.radius = radius;
     }

     getSvgElement() {
          return `<circle fill="${this.shapeColor}" cx="125" cy="145" r="${this.radius}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.shapeColor = color;
     }
}

// Square class, inheriting from Shape
class Square extends Shape {
     constructor(width, height, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.width = width;
          this.height = height;
     }

     getSvgElement() {
          return `<rect fill="${this.shapeColor}" x="48" y="72" width="${this.width}" height="${this.height}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.shapeColor = color;
     }
}

// Triangle class, inheriting from Shape
class Triangle extends Shape {
     constructor(points, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.points = points;
     }

     getSvgElement() {
          return `<polygon fill="${this.shapeColor}" points="${this.points}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.shapeColor = color;
     }
}

// Text Class
class Text {
     constructor(text, textColor) {
          this.text = text;
          this.textColor = textColor;
     }

     getSvgElement() {
          return `<text x="128" y="157" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.textColor = color;
     }
}

// Function that prompts user for input
async function createLogo() {
     const answers = await inquirer.prompt([
     {
          type: 'input',
          name: 'text',
          message: 'Enter text (up to 3 characters)',
          default: 'SVG',
          validate: function (input) {
               if (input.length > 3) {
               return 'You can only enter up to 3 characters. Backspace to 3.';
               }
               return true;
          },
     },

     {
          type: 'list',
          name: 'textColor',
          message: 'Text color?',
          choices: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white'],
     },

     {
          type: 'list',
          name: 'shape',
          message: 'Shape?:',
          choices: ['triangle', 'circle', 'square'],
     },

     {
          type: 'list',
          name: 'shapeColor',
          message: 'Shape color?',
          choices: ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'black', 'white'],
     },

     {
          type: 'confirm',
          name: 'border',
          message: 'Border?:',
          default: false,
     },

     {
          type: 'list',
          name: 'borderColor',
          message: 'Border color',
          choices: ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'black', 'white'],
          when: (answers) => answers.border,
     },
]);

const { text, textColor, shape, shapeColor, border, borderColor } = answers;
console.log('Text:', text);
console.log('Text Color:', textColor);
console.log('Shape:', shape);
console.log('Shape Color:', shapeColor);
console.log('Border:', border);
console.log('Border Color:', borderColor);

  // Creation of SVG content
let shapeElement;

     if (shape === 'circle') {   // 70 = Radius factor  
          const circle = new Circle(70, shapeColor, border, borderColor);
          shapeElement = circle.getSvgElement();
     } else if (shape === 'triangle') {
                             // Points = Top x-y, BotL x-y, BotR x-y
          const triangle = new Triangle('125, 40, 55, 175, 195, 175', shapeColor, border, borderColor);
          shapeElement = triangle.getSvgElement();
     } else if (shape === 'square') { // 150 = x-y factors
          const square = new Square(150, 150, shapeColor, border, borderColor);
          shapeElement = square.getSvgElement();
     } else {
    // Handle invalid shape
     shapeElement = '';
     }

     const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">${shapeElement}
                    <text x="126" y="157" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text></svg>`;

     // Writes SVG content to a file named "logo.svg"
     fs.writeFileSync('logo.svg', svgContent);

     console.log('Generated logo.svg');
}

createLogo();