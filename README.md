

# SVG-LOGO-MAKER

## License
[![License Badge](https://img.shields.io/badge/license-mit-green?style=plastic)](https://choosealicense.com/licenses/mit/)&nbsp;

* Select the badge to see details.
* To see more about license badges, visit [Shields IO](https://shields.io/category/license)

&nbsp;

## Description
The purpose is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. The user also has the option of adding a border to the logo.

&nbsp;

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Media](#media)
 * [Testing](#testing)
 * [Contribution](#contribution)
 

&nbsp;

## Installation

1. Install node.js, npm and the modules fs, inquirer, util and jest.
2. Go to the terminal and type in npm install + module name.
3. Build your index.js file.
     - Create classes for Shape, Circle, Square, Triangle and Text. These should extend from the Shape class
     - Create an async function that contains inqirer prompt questions.
          - These can include text (up to 3 characters), text color, shape type and shape color.
          - You can add a border and border color options to the inquirer class if you would like.
     - remember to let the SVG content depend on the inquirer questions.
4. You are now ready to use the application.

* [Node.js Installation](https://nodejs.org/en)

* [NPM Installation](https://docs.npmjs.com/cli/v8/commands/npm-install)

* [Jest Installation](https://jestjs.io/docs/getting-started)

&nbsp;

[Table of Contents](#table-of-contents)



## Usage

1. Open up your index.js file in a terminal.
2. Type in node index.js.
3. You will be prompted with the questions you setup.
4. Once you are finished answering the questions, a logo.svg file will be produced.
5. Right click on the file and select "Open with Live Server" to see the produced logo.


&nbsp;

[Table of Contents](#table-of-contents)



## Media
_A brief overview of the project build_
&nbsp;


![Media](./library/images/SVGBrief.gif)

* Visit [Full Media](https://drive.google.com/file/d/10J25oGzqWXDTcjkg8xgADKCAaRjAKWo0/view?usp=share_link) to see more details

&nbsp;

[Table of Contents](#table-of-contents)



## Testing

Go to ./svg-logo-maker/library/tests. Developers can run npx jest <circle, square, and triangle>.test.js to run tests that have been currently setup.

&nbsp;

[Table of Contents](#table-of-contents)



## Contribution


&nbsp;

[Table of Contents](#table-of-contents)



## Questions

_If you have any questions, please feel free to contact me._

GitHub Username: [waynefenwick](https://github.com/waynefenwick)

Email Address: <a href="mailto:waynefenwick@gmail.com">waynefenwick@gmail.com</a>

&nbsp;

_Thanks for taking time to visit this repository!_

[Back to Top](#)

