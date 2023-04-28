#!/bin/bash
export NVM_DIR="/home/bhavjit/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /home/bhavjit/khan-api
git checkout safelist
echo "Updating safelist..."
time nvm exec --lts node .
echo "Committing changes..."
git add .
git commit -m "Update safelist"
git push
