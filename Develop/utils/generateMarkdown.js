function generateMarkdown(data) {
  return `
# ${data.title}
  ${data.description}
`;
}

module.exports = generateMarkdown;
