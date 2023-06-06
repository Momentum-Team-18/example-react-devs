# React Freeshelf

Your project is to build a single-page application that displays books using React. You do not need to run any command to create an application because there already is a React application in this repo.

To get started with local development:
1. Clone this repo and `cd` into it.
2. Run `npm install` (just like that) to install all the dependencies that are listed in the package.json file.
3. Open the project and get to work in the `src` folder!

The finished product will look like the included wireframe. When the information for a book is clicked, the section expands to show additional information about the book. When it is clicked again, it should collapse back to the original view. This behavior is commonly referred to as a disclosure, as described in [this Web Accessibility (A11y) practices document with examples](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/). 

The page should display a list of books with a thumbnail display of information for each book, including:

+ title
+ author
+ short description
+ image of the book's cover

The additional information shown in the expanded view should include:

+ URL
+ publisher
+ publication date
+ expanded description

You will need a list of books to display in your application. A list is contained at the end of this file; you can copy-and-paste it into your code.

Note that you will need to handle cases where not all the data is available. In these cases, make sure your UI design can accommodate missing or problematic data and/or supply placeholder images or text so that your page won't look broken without it. **Do not edit the data.**

## Wireframe

![Wireframe](freeshelf-wireframe.png)

## Rubric

- *Completion*
  - 1 (Unsatisfactory): does not show all information or does not show/hide information
  - 2 (Satisfactory): meets all requirements under "Directions". Shows all books and shows/hides their extra information
  - 3 (Exemplary): meets all requirements, is nicely styled, uses the `aria-expanded` attribute

- *React Usage*
  - 1 (Unsatisfactory): uses DOM manipulation or HTML directly to show and hide information
  - 2 (Satisfactory): uses JSX, conditional rendering, and state to show and hide information
  - 3 (Exemplary): breaks application into multiple components in a useful way
