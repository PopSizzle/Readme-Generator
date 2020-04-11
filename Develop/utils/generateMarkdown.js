function generateMarkdown(data) {
  necessities = data.dependencies.split(",");
  

  return `
  #${data.title}

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
  
  *base npm package
  *npm axios
  *npm inquirer
  
  ### Usage
  
  Usage
  
  ## License
  
  This project is licensed under the MIT License 
  
  ## Acknowledgments
  
  Acknowledgements
  
  ## Tests
  
  ##Questions
  
  *User Github profile picture
  *User Github link
  *User Github email
`;
}

module.exports = generateMarkdown;
