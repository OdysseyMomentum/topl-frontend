# Odyssey Client

Topl's envisioned Peace Credit solution is intended to empower peace builders to better measure their peace outputs and additionally unlock a new source of innovative financing. With this first phase of the Peace Credit solution we aim to introduce increased transparency into the peace building space as well as deliver a new method of results-based financing that rewards the most productive changemakers rather than the most connected fundraisers. In the second phase of our project, we will be leveraging peace credits as a market-powered early warning system designed to interpret relative supply, demand, and velocity in the Peace Credit market as a distributed oracle for potential instability.

This frontend application has been specifically designed for [Odyssey Conflict Prevention Trach Challenge](https://www.odyssey.org/hackathon-2020-business-plan-for-peace-ministry-of-defence-conflict-prevention/)

# Tech Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

### Whiteflag API
[Topl/whiteflag-api](https://github.com/Topl/whiteflag-api/tree/bifrost) is a forked and modified version of the Whiteflag protocol to interact directly with Topl's Bifrost nodes. The protocol will allow for messages created using the Whiteflag specification to be encoded and recorded on the Topl blockchain and the transaction hash to be returned to Whiteflag.

### Bifrost
Topl's blockchain reference [node](https://github.com/Topl/Bifrost). Messages are validated and submitted to the blockchain using [Brambljs](https://github.com/Topl/BramblJS). Similar to Ethereum's Web3, Brambl allows easy chain integration and account management at the API and application level.

## Development server
Run `npm install` to install all dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
