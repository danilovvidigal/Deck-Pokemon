# PokemonTcgDeckBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.
Install node in v20.12.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Architecture 

The architecture used was (standalone). The choice was due to the saving of files, and better modulation of our system. With this structure, we make the component its own module, thus starting only the module and dependencies that the component needs.

## Summary

The "Pokemon TCG Deck Builder" is a web application built using Angular, Tailwind CSS, and several third-party libraries such as NgxPagination and NgxToastr. It allows users to create, edit, view, and list Pokémon card decks. Below is a summary of the main functionalities and methods used to meet the specified requirements.

Main Functionalities
Create New Deck

Allows users to create a new Pokémon card deck.
Users can search for cards by name and add up to 60 cards to a deck, respecting the rule of no more than 4 cards with the same name.
Validation ensures that the deck has between 24 and 60 cards and has a name before it can be saved.
Edit Deck

Users can edit existing decks, changing the deck name and the included cards.
The application distinguishes between creating a new deck and editing an existing one by the URL parameter.
List Decks

Displays a list of all saved decks with options to view, edit, or delete each deck.
Displays the image of the first card in each deck for easy identification.
Deck Details

Shows detailed information about a specific deck, including the number of Pokémon cards, trainer cards, and the number of unique types of cards.
Pagination

Implements pagination for the deck card view, displaying only 12 cards per page.
Error and Success Alerts

Uses the NgxToastr library to display error and success messages in response to user actions, such as attempting to save an invalid deck or confirming a deck has been saved successfully.
Methods and Implementations
Creating and Editing Decks

searchCards(): Searches for Pokémon cards by name using the API and updates the search results list.
addCard(card: PokemonCard): Adds a card to the deck, ensuring the quantity restrictions are met.
removeCard(card: PokemonCard): Removes a card from the deck.
saveDeck(): Saves the deck, validating the number of cards and the deck name, and displays success or error messages using Toastr.
Listing Decks

loadDecks(): Loads the list of saved decks.
deleteDeck(deckName: string): Removes a deck from the list.
viewDeck(deckName: string): Navigates to the deck details page.
editDeck(deckName: string): Navigates to the deck edit page.
createNewDeck(): Navigates to the new deck creation page.
Deck Details

calculateCounts(): Calculates the number of Pokémon cards, trainer cards, and unique types in the deck.
goBack(): Navigates to the previous page.
Deck Service (DeckService)

addDeck(deck: Deck): Adds a new deck to the list.
getDecks(): Returns the list of decks.
deleteDeck(deckName: string): Removes a specific deck from the list.
updateDeck(updatedDeck: Deck): Updates an existing deck.
getDeckByName(deckName: string): Returns a specific deck by name.
Libraries and Versions Used
Angular: Main framework of the application.
Version: ^16.2.0
Tailwind CSS: Used for responsive and modern styling.
Version: ^3.4.3
NgxPagination: Library for pagination.
Version: ^6.0.3
NgxToastr: Library for displaying toast messages.
Version: ^18.0.0
