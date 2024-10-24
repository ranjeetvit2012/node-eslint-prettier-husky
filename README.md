1. Initialize ESLint
bash
Copy code
npm init @eslint/config@latest
Run ESLint with the --fix option:

bash
Copy code
npx eslint --fix
Follow the prompts:

rust
Copy code
√ How would you like to use ESLint? · syntax
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config will require the following dependencies:

perl
Copy code
eslint, globals, @typescript-eslint
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · yarn
2. Install VSCode ESLint Extension
Make sure you install the ESLint extension in Visual Studio Code.

3. Installing Prettier
bash
Copy code
yarn add --dev --exact prettier
Create a .prettierrc file in the root directory:

json
Copy code
{
  "tabWidth": 2,
  "useTabs": false
}
Create a .prettierignore file to ignore certain directories:

Copy code
build
coverage
dist
Try formatting your code:

bash
Copy code
npx prettier . --write
4. Install VSCode Prettier Extension
Also, install the Prettier extension in Visual Studio Code.

5. Update .vscode/settings.json
json
Copy code
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "typescript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
6. Install eslint-config-prettier
To avoid conflicts between ESLint and Prettier configurations, install eslint-config-prettier:

bash
Copy code
npm install --save-dev eslint-config-prettier
7. Add a Prettier Script in package.json
json
Copy code
"scripts": {
  "prettier": "prettier . --write"
}
8. Setup Husky for Pre-commit Hooks
Install Husky:

bash
Copy code
npm install --save-dev husky
Initialize Husky:

bash
Copy code
npx husky init
Update .husky/pre-commit:

bash
Copy code
npm prettier






