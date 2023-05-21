// TODO: Create a function that returns a license badge based on which license is selected on index.js and name:license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadgeOptions = ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'];
  let badgeUrl = '';
  for (let i = 0; i < licenseBadgeOptions.length; i++) {
    const formattedLicense = licenseBadgeOptions[i].replace(/-/g, '');
    if (license.includes(licenseBadgeOptions[i])) {
      badgeUrl = `https://img.shields.io/badge/license-${formattedLicense}-green?style=plastic`;
      break;

    }
  }
  if (badgeUrl === '') {
    return ''
  } else {
    return badgeUrl
  }
};

`https://img.shields.io/badge/license-apache2.0-green?style=plastic`

// TODO: Create a function that returns the web license 
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkOptions = ['mit', 'apache-2.0', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0'];
  let linkUrl = '';
  for (let i = 0; i < licenseLinkOptions.length; i++) {
    if (license.includes(licenseLinkOptions[i])) {
      linkUrl = `https://choosealicense.com/licenses/${licenseLinkOptions[i]}/`;
      break;
    }
  }
  if (linkUrl === '') {
    return ''
  } else {
    return linkUrl
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const githubLink = `https://github.com/${data.username}`;

  return `

# ${data.title}

## License
[![License Badge](${licenseBadge})](${licenseLink})&nbsp;

* Select the badge to see details.
* To see more about license badges, visit [Shields IO](https://shields.io/category/license)

&nbsp;

## Description
${data.description}

&nbsp;

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [Media](#media)
 * [Testing](#testing)
 * [Contribution](#contribution)
 

&nbsp;

## Installation

${data.installation || ''}

* [Node.js Installation](https://nodejs.org/en)

* [NPM Installation](https://docs.npmjs.com/cli/v8/commands/npm-install)

* [Jest Installation](https://jestjs.io/docs/getting-started)

&nbsp;

[Table of Contents](#table-of-contents)



## Usage

${data.usage || ''}

&nbsp;

[Table of Contents](#table-of-contents)



## Media
_A brief overview of the project build_
&nbsp;

${data.media ? `## Media\n\n![Media](${data.media})` : ' '}

* Visit [Full Media](https://drive.google.com/file/d/1RP5O_m4o5pA8fouVVtnfsFCCwfmUrG7Y/view) to see more details

&nbsp;

[Table of Contents](#table-of-contents)



## Testing

${data.testing || ''}

&nbsp;

[Table of Contents](#table-of-contents)



## Contribution

${data.contribution || ''}


&nbsp;

[Table of Contents](#table-of-contents)



## Questions

_If you have any questions, please feel free to contact me._

GitHub Username: [${data.username}](${githubLink})

Email Address: <a href="mailto:${data.email}">${data.email}</a>

&nbsp;

_Thanks for taking time to visit this repository!_

[Back to Top](#)

`};
module.exports = generateMarkdown;