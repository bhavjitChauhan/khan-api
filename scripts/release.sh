#!/bin/bash

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git could not be found, please install it"
    exit 1
fi

# Check current branch is master
if [ "$(git rev-parse --abbrev-ref HEAD)" != "master" ]; then
    echo "Must be on the master branch to run this script"
    exit 1
fi

# Check if there are any uncommited changes
if [ -n "$(git status --porcelain)" ]; then
    read -p "There are uncommited changes, do you want to continue? [y/N] " -n 1 -r response
    if [[ ! $response =~ ^[Yy]$ ]]; then
        exit 1
    fi
    echo
    git stash
fi

# Ensure Node.js version >= 18
if [ "$(node -p "process.versions.node.split('.')[0]")" -lt 18 ]; then
    echo "Node.js version must be >= 18"
    exit 1
fi

# Check if NPM is installed
if ! command -v npm &> /dev/null; then
    echo "NPM could not be found, please install it"
    exit 1
fi

# Check if logged into the NPM registry
if ! npm whoami &> /dev/null; then
    echo "You are not logged in to the NPM registry, logging in..."
    npm login
fi

# Check if logged into the GitHub Package Registry
if ! npm whoami --registry=https://npm.pkg.github.com &> /dev/null; then
    echo "You are not logged in to the GitHub Package Registry, logging in..."
    npm login --scope=@bhavjitChauhan --registry=https://npm.pkg.github.com
fi

# Let user upgrade the version
read -p "Current version: $(node -p "require('./package.json').version"). Do you want to upgrade it? [Y/n] " -n 1 -r response
if [[ ! $response =~ ^[Nn]$ ]]; then
    echo
    read -p "Enter the new version: " -r version
    echo "Upgrading version to $version..."
    npm version "$version" -m "Release %s"
    git add package.json
else
    echo
fi

# Build the package
echo "Installing dependencies..."
npm i
echo "Installed dependencies"
echo

echo "Linting..."
npm run lint
echo "Linted"
echo

read -p "Do you want to run tests? [Y/n] " -n 1 -r response
if [[ ! $response =~ ^[Nn]$ ]]; then
    echo "Running tests..."
    npm test
    echo "Tests complete"
    echo
else
    echo
fi

echo "Cleaning..."
npm run clean
echo "Cleaned"
echo

echo "Building..."
npm run build
echo "Built"
echo

echo "Generating types..."
npm run types
echo "Types generated"
echo

echo "Formatting..."
npm run format
echo "Formatted"
echo

# Publish the package to the NPM registry
read -p "Do you want to publish to the NPM registry? [Y/n] " -n 1 -r response
if [[ ! $response =~ ^[Nn]$ ]]; then
    echo "Publishing package to NPM registry..."
    npm publish --access public
    echo "Package published to NPM registry"
fi

# Publish the package to the GitHub Package Registry
read -p "Do you want to publish to the GitHub Package Registry? [Y/n] " -n 1 -r response
if [[ ! $response =~ ^[Nn]$ ]]; then
    echo "Publishing package to GitHub Package Registry..."
    sed -i 's/"name": "@bhavjit\/khan-api"/"name": "@bhavjitchauhan\/khan-api"/' package.json
    npm publish --access public
    sed -i 's/"name": "@bhavjitchauhan\/khan-api"/"name": "@bhavjit\/khan-api"/' package.json
    echo "Package published"
fi

git stash pop

echo "Release complete"
