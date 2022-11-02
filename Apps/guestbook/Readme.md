Buzzle
======

Buzzle is a better clone of Twitter.

## Required Software

* Node.js with npm (version 12 or higher)
* MySQL (version 8 or higher)

## Deployment

To start the app, first create a `.env` with 
the following parameters:

* `BUZZLE_DB_HOST` with a database host
* `BUZZLE_DB_PORT` with a database port
* `BUZZLE_DB_NAME` with a database name
* `BUZZLE_DB_USER` with a database user
* `BUZZLE_DB_PASS` with a database password
* `BUZZLE_DB_DIALECT` with a database dialect
* `BUZZLE_DB_SECRET` with a session secret for cookies processing
* `BUZZLE_DB_ROUNDS` with hashing rounds
* `BUZZLE_PORT` with the port of the web application
* `BUZZLE_ADMIN USER` with the login name of the administrator
* `BUZZLE_ADMIN_PASS` with the password of the administrator's account

For example:
