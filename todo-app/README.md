# todo-app

A simple todo app example demonstrating how to use [nvm](https://github.com/nvm-sh/nvm) with a Node.js project.

## Getting Started

```bash
mkdir todo-app
cd todo-app
git init
```

### Use nvm to set up Node.js

```bash
# Install the Node.js version specified in .nvmrc
nvm install

# Use the correct version
nvm use
```

### Run the app

```bash
node index.js
```

## .nvmrc

This project includes an `.nvmrc` file that pins the Node.js version to the latest LTS release. When you `cd` into the project directory, nvm can automatically switch to the correct Node.js version (see [Deeper Shell Integration](https://github.com/nvm-sh/nvm#deeper-shell-integration)).
