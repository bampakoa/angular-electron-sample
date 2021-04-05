# Welcome to angular-electron-sample 👋

> Angular-Electron sample application

An Angular CLI application that showcases how to convert an Angular application to a native desktop one using Electron. It also demostrates how to build and maintain two different versions of an Angular application:

- A web based version that is rendered in a web browser and deployed to a web server.
- A desktop based version that is rendered in a native desktop window and deployed to the local filesystem as a single executable file. 

## Scenario
The application uses the Angular CLI skeleton page to display a list of pirates.

In the web based version, pirates are fetched from a JSON file using the built-in HTTP client. When the user clicks on a pirate, a `window.alert` dialog is displayed.

In the desktop based version, pirates are fetched from the same JSON file that resides in the local filesystem using the `fs` Node.js API. When a pirate is clicked, a native desktop dialog is displayed.

## Install

```sh
npm install
```

## Usage

For the web based version run:

```sh
npm run start
```

For the desktop version run:

```sh
npm run build:dev
npm run start:dev
```
