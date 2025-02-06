
# ComponentLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Objective

To develop a reusable and accessible button component in Angular utilizing Angular Material library. To demonstrate my ability to create UI components and apply a theming layer to the component.

## Setting up

##### Clone the repo

```
$ git clone https://github.com/jeveenshrestha/component-library.git
$ cd component-library
```

##### Install npm dependencies
```
$ npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Demo

In the browser, there is a card component, the card has some content and an action button, Edit. The button is the custom button which is a default button with an icon on it's left side. When the button is clicked, the content becomes editable and the Edit button changes to Save button. This button is also a default one but it does not have any icon on it. After modifying content which is not necessary, upon clicking the Save button, Saving button appears briefly before changing back into Edit button. This Saving button is a disabled button which is not clickable. 

Different states of the button i.e. Focus, Hover and Active, can be tested. Each state has different background and text color, according to the specifications.

The demo app does not have negative button. but if you want to test it, go to the text editor, open card.component.html file and uncomment the code at line 31. The application will reload by itself. Go back to the browser, there you can see the Delete button which is a negative button with all the states, background colors and text colors as required.

### Theming

In global style file, styles.scss I created the custom palettes, custom-blue-palette and custom-red-palette including the colors mentioned in the specification. Then created necessary css variables using Material's mat functions. In the palettes the contrast colors for the text colors were also defined. Later those variables are used in the button components's style file.

I had some challenges during this, first one was the version. I did not know that the version of material has to match with the angular core version. I had difficulties to find right and working answers to my questions as answers were for different versions. Finally I realised that the versions matter everywhere, questions should also be version relevant.

### Thought process

My thought process behind this demo application is to demonstrate the real world use case, where to use and how to use these buttons.

### Why version 17.3.11 not 18

I was well aware of the thing that you are working with Angular 18 right now but I went with 17 because of a couple of reasons, as I mentioned during the interview that I am learning Angular and I already have my development environment set up with Angular 17 CLI. Therefore I decided to go with this version. And I noticed that there are not a lot of differences between the two versions which will effect this particular demo application.
