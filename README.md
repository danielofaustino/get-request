# GET Command

This is a project developed as part of an object-oriented programming (OOP) study. The objective of this project is to implement a parametrizable `GET` command in Node.js using TypeScript.

## Technologies Used

- Node.js
- TypeScript
- Axios

## Features

The implemented `GET` command in this project allows making HTTP or HTTPS requests to a specified address. The main features of the project are:

- Parameterization of the protocol (HTTP or HTTPS).
- Definition of an interval to repeatedly send the requests.
- Pausing or resuming the sending of requests.
- Exiting the program using the `Ctrl + S` command.

## How to Run

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local environment.
3. Open the terminal in the project's root folder.
4. Run the command `npm install` to install the dependencies.
5. Run the command `npm run start` to start the application.

## How to Use

After running the application, you will be prompted to enter the following information:

1. URL: Enter the URL address to which you want to send the GET requests.
2. Protocol: Enter `http` or `https` to choose the desired protocol.
3. Interval (in seconds): Enter the time interval between the requests.

The application will start sending the GET requests according to the provided parameters. To pause the sending of requests, press `Ctrl + S`, to resume press `Enter` . To exit the application, press `Ctrl + C`.


![project demo](https://raw.githubusercontent.com/danielofaustino/get-request/main/demo/recording.gif)


