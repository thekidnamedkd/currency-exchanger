# _CURRENCY EXCHANGER_

#### _WEEK 6 INDEPENDENT PROJECT_

#### By _**KEVIN DAVIS**_

## Description

_A USD currency exchanger using an API call for real-time exchange rates in over 50 countries._

### Specs
| Spec | Input | Output | Done? |
| :-------------     | :------------- | :------------- | :------------- | 
| Program will query an API with unique key for currency exchange. | input: N/A | output: N/A | [X] |
| Program will display 'error' message with relevant info if API result is anything but 200 OK. | input: query | output: '400 Bad Request - Client Error' | [X] |
| Program will take a USD value input from user. | input: 50 USD | output: 50 USD | [X] |
| Program will convert USD input value to another currency with real-time exchange rate via API and display. | input: 50 USD | output: 44.50 EUR | [X] |
| Program will convert USD input value to at least 5 different currencies with real-time exchange rate via API and display based on selection. | input: 50 USD | output: 353.28 RMB | [X] |
| Program will save multiple exchange rates to the session storage for reuse. | input: N/A | output: N/A | [ ] |


## Setup/Installation Requirements

**Application Setup:**
* _Visit the following link: https://github.com/thekidnamedkd/currency-exchanger
* _Clone the repository to your desired director.y_
* _Open the repository in your desired IDE._
* _You will need a unique API key to run this application properly. Please view separate instructions below and then return to next step._
* _Open a new terminal and run $ npm install_
* _Open a new terminal and run $ npm run build_
* _Open a new terminal and run $ npm run start_
* _Wait for default browser to load and follow onscreen instructions._

**Unique API Setup:**
* _Visit https://www.exchangerate-api.com/ and input your email address and click the "Get Free Key" button._
* _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
* _At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month._
* _Return to the IDE where you have booted the Currency Exchanger code and create a file in the top directory called '.env'_
* _Inside of this file add 'API_KEY = {COPY API TOKEN FROM WEB - eg. xxo0x00x0x00xx0x}'_
* _Save your .env file_ 
* _For security include .env in .gitignore., save, and return to instructions above._


## Known Bugs

* _No known bugs at this time._

## Support and contact details

_For questions, comments, or collaboration contact me at thekidnamedkd@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_
* _Popper_
* _Jest_
* _Babel_
* _ESlint_

### License

*GPL license distribution*

Copyright (c) 2020 **_Kevin Davis_**
