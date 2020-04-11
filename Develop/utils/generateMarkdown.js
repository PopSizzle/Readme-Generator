function generateMarkdown(data) {
  dependencies = data.necessary.split(",");
  let dependencyList= "";
  acknowl = data.contributors.split(",");
  let acknowlList= "";

  for(var i=0; i<dependencies.length; i++){
    dependencyList += "\n  * " + dependencies[i];
  }

  for(var i=0; i<acknowl.length; i++){
    acknowlList += "\n  * " + acknowl[i];
  }

  return `
  # ${data.title}

  ${data.description}
  
  ## Table of Contents
  
  *Installation
  *Usage
  *License
  *Contributors
  *Tests
  *Questions
  *Contact Info
  
  ### Installation
  
  In order to use this Readme Generator you will need to install the following dependencies:
  ${dependencyList}

  ### Usage
  
  ${data.usage}
  
  ## License
  
  ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
  
  ## Acknowledgments
  ${acknowlList}
  
  ## Tests

  ${data.tests}
  
  ## Questions
  
  * <img src="https://avatars3.githubusercontent.com/u/60407759?v=4" alt="avatar" style="border-radius: 16px" width="30">
  * https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
