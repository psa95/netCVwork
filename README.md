# netCVwork

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Features!


## Quickstart

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
The above command will create a new virtual instance for the application, and install all required system and node dependencies.
Once the setup is done, we need to connect to the Vagrant server, navigate to the project, and start it.

```sh
$ vagrant ssh
$ cd /vagrant/
$ npm start
```

Once `npm start` is run and the server is started, on the host PC you can navigate to `localhost:8881` to find the web application.
