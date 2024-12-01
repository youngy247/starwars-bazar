# Star Wars Bazar App

Welcome to the Star Wars Bazar App! This application allows users to explore Star Wars starships, view details, and interact with starship purchasing functionality. It is built using **Next.js** and uses **Yarn** as the package manager.

This project is a fork of the final step of the Carbon Design System tutorial, which I used as a foundation for learning the fundamentals of the Carbon Design System. You can check out the original tutorial [here](https://github.com/carbon-design-system/carbon-tutorial-nextjs/tree/v11-next-step-5).

You can view the live app at: [Star Wars Bazar App](https://starwars-bazar.vercel.app/)

The source code is available on GitHub: [Star Wars Bazar Repository](https://github.com/youngy247/starwars-bazar)

## Features

- **Starship Browsing**: Browse and view details of starships from the Star Wars universe through the [SWAPI](https://swapi.dev/) API.
- **Search**: Search for starships, though the search is limited to results on the current page (only 36 results are returned from one API call). Full search across all results is planned for future development.
- **Pagination**: Pagination is set up for the backend, but the search currently only works for the specific page you're on.
- **Categories**: Categories for different items are displayed, but currently, only the **Starships** category is functional. The other categories are just for show.
- **Purchasing Starships**: You can increase and decrease the quantity of a starship in your cart. A popup appears that suggests you "view in cart" (though this functionality is not yet working).
- **Carbon Design System**: Components and variables from the Carbon Design System are used where applicable to maintain consistency in design.
- **Error Boundary**: The app includes an error boundary component to catch errors during development. For production, additional features like logging to services such as Sentry will be implemented.

## Setup

1. Clone the repository:

      ```bash
      git clone https://github.com/youngy247/starwars-bazar.git
      cd starwars-bazar
      ```

2. Install dependencies:

     ```bash
     yarn install
     ```

3. Run the development server:

     ```bash
      yarn dev
     ```

Visit the app in your browser at http://localhost:3000.

## Testing

- **Husky Git Hook**: The app is configured with a Husky Git hook to prevent pushing code unless all tests pass.
- **Mock Data**: The API calls are tested using mock data to ensure functionality.
- **Product Component Tests**: A snapshot test is set up for the product component to verify the rendered output.

## Known Issues

- The View in Cart popup does not yet link to the cart page or show any cart functionality.
- The Categories for items other than starships are not functional and are only for display.
- The search only works within the current page of results (36 results). Searching through all results is planned but not yet implemented.
- The error boundary works in development, but for production, it needs logging to an error service (e.g., Sentry).

## Technologies Used

- **Next.js**: Framework used for building the app.
- **Yarn**: Package manager used to manage dependencies.
- **SWAPI**: Star Wars API to fetch data about starships.
- **Carbon Design System**: A design system used for UI components and design consistency.
- **Jest**: Testing framework used for running tests, including snapshot testing and functionality checks.

## Future Improvements

- Implement full pagination and search across all results.
- Fix cart functionality and make the View in Cart popup work as expected.
- Implement logging for errors in production using services like Sentry.
