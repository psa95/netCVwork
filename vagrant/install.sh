#!/bin/bash
set -eu -o pipefail

BACK_END="FinalProjectBackEnd"
FRONT_END="FinalProjectFrontEnd"

# Install build deps
echo "Provisioning Virtual Machine"
sudo apt-get update
echo "Installing dev packages, including Git"
sudo apt-get install -y build-essential unzip libdb-dev libleveldb-dev libsodium-dev zlib1g-dev libtinfo-dev wrk curl vim git sysvbanner

# Setup latest NVM
echo "Setup NVM"
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" origin`
export NVM_DIR=~/.nvm
source $NVM_DIR/nvm.sh
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc

# Source NVM Install
echo "Install NodeJS"
nvm install node

# Install Project Dependencies
cd /vagrant/

# Link to guest system
echo "Make Node Modules Directory - SymLinks"
mkdir ~/node_modules_$FRONT_END
mkdir ~/node_modules_$BACK_END
ln -s ~/node_modules_$FRONT_END /vagrant/client/node_modules
ln -s ~/node_modules_$BACK_END /vagrant/node_modules

echo "Installing node dependencies for backend..."
npm install -g webpack gulp npm-check-updates bower
npm install
npm link
# npm shrinkwrap --dev

echo "Installing node dependencies for frontend..."
cd client
npm install
npm link

echo "Dos2Unix Install"
sudo apt-get install -y dos2unix

# echo "Copy to home directory"
# cp -r /vagrant/* /home/vagrant
# chown -R vagrant:vagrant /home/vagrant
# find /home/vagrant -type f -print0 | xargs -0 dos2unix
# touch /home/vagrant/.qm_export_ports

echo "MongoDB Install"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update
sudo apt-get install -y mongodb-org

# Done!
banner "netCVwork"
echo
echo "This has been succesfully installed."
