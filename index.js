const inquirer = require('inquirer');
const fs = require('fs');

// Define a function to prompt the user for input
async function createLogo() {
     const answers = await inquirer.prompt([
          {
               type: 'input',
               name: 'text',
               message: 'Enter text (up to 3 characters)',
               default: 'SVG',
               validate: function (input) {
                    return input.length > 0 && input.length <= 3;
               }
          },

          {
               type: 'list',
               name: 'textColor',
               message: 'Text color',
               choices: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white'],
          },

          {
               type: 'list',
               name: 'shape',
               message: 'Shape:',
               choices: ['triangle', 'circle', 'square'],
          },

          {
               type: 'list',
               name: 'shapeColor',
               message: 'Shape color',
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

     // Create the SVG content
     let shapeElement;

     if (shape === 'circle') {
          shapeElement = `<circle fill="${shapeColor}" cx="125" cy="145" r="73" ${border ? `stroke="${borderColor}" stroke-width="2"` : ''}/>`;
     } else if (shape === 'triangle') {
          shapeElement = `<polygon fill="${shapeColor}" points="125, 65, 55, 180, 195, 180" ${border ? `stroke="${borderColor}" stroke-width="2"` : ''}/>`; //Point 1:(t) x & y;  Point 2:(l) x & y; Point(R) 3: x & y 

     } else if (shape === 'square') {
          shapeElement = `<rect fill="${shapeColor}" x="48" y="72" width="150" height="150" ${border ? `stroke="${borderColor}" stroke-width="2"` : ''}/>`;
     } else {
          // Handle invalid shape
          shapeElement = '';
     }

     const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">${shapeElement}
                         <text x="128" y="157" text-anchor="middle" fill="${textColor}" font-size="30">${text}</text></svg>`;

     // Write the SVG content to a file named "logo.svg"
     fs.writeFileSync('logo.svg', svgContent);

     console.log('Generated logo.svg');
}

createLogo();



// GIVEN a command - line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered