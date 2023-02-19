#!/bin/bash 

# This script is used to update the documentation on the docs branch

cleanup () {
    git checkout -
    if [ "$pop_stash" = true ]; then
        echo "Popping stash..."
        git stash pop
    fi
}

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

# Stash any uncommited changes
if [ -n "$(git status --porcelain)" ]; then
    echo "There are uncommited changes, stashing them..."
    git stash
    pop_stash=true
fi

# Merge the master branch into the docs branch
if ! git show-ref --verify --quiet refs/heads/docs; then
    echo "docs branch does not exist"
    cleanup
    exit 1
fi
git checkout docs
git merge master --no-edit

# Ensure Node.js version >= 18
if [ "$(node -p "process.versions.node.split('.')[0]")" -lt 18 ]; then
    echo "Node.js version must be >= 18"
    cleanup
    exit 1
fi

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "Yarn could not be found, please install it"
    cleanup
    exit 1
fi

# Build the docs
yarn
yarn doc

# Create CNAME file
echo "khan-api.bhavjit.com" > docs/CNAME

# Commit the docs
sed -i '/docs/d' .gitignore
git add docs .gitignore
git commit -m "Update documentation"

# Cleanup
cleanup
