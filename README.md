# netCVwork

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Features!


## Quickstart

## VAGRANT DISABLED

netCVwork requires [Vagrant](https://www.vagrantup.com/downloads.html) v2+ and [Virtual Box](https://www.virtualbox.org/wiki/Downloads) to run.

Tbhe following setup is used to create the development environment.

Install Vagrant and Virtual Box and clone this repository.

```sh
$ git clone https://github.com/psa95/netCVwork.git
$ cd netCVwork
```

Now, from inside the folder, run the following command:

```sh
$ vagrant up
```

***Note (Windows Users):*** Please run all commands pertaining to ***_Vagrant_*** in a Powershell window (with Administrator Privileges) to avoid any issues.

The above command will create a new virtual instance for the application, and install all required system and node dependencies.
Once the setup is done, we need to startup our MongoDB service within the Vagrant Server.

```sh
$ vagrant ssh
$ sudo mongod
```
Now, we need to build our React frontend in a ***new command window***.

```sh
$ vagrant ssh
$ cd /vagrant/client
$ npm run-script build
```

Next, navigate to the main project, and start it.

```sh
$ cd /vagrant/
$ npm run-script server
```

Once `npm run-script server` is run and the server is started, on the host PC you can navigate to `localhost:8882` to find the web application.

## Quickstart

Install all dependencies by typing the following in a terminal window:
```sh
$ npm install
$ cd client
$ npm run-script build
$ cd..
$ npm run-script server
```

## Git

To create a new branch
```sh
$ git checkout -b <branchname>
```
Always remember to create a new branch to edit the code.
Never mess with the master branch.

To display all the branches
```sh
$ git branch
```

To use a previous created branch
```sh
$ git checkout <branchname>
```

To push your work to the current branch

To add all the files to the branch
```sh
$ git add .
```
To add only one file to the branch
```sh
$ git add <filename>
```
To commit to the branch
```sh
$ git commit -m "some meaningful message"
```
To push to the branch
```sh
$ git push origin <branchname>
```

If there are updates on the master branch
Follow the below steps to update your branch

```sh
$ git fetch origin
$ git merge origin/master
```
If there are any conflicts, resolve them in your code editor
```sh
$ git add .
$ git commit -m "message"
$ git push origin <branchname>
```
