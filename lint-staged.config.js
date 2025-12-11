// npx tsc --noEmit && npx eslint --fix . && npx prettier --write .
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown, JSON and CSS
  '**/*.(md|json|css)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
}
