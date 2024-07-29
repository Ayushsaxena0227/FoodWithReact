# Food With React

This is a React-based web application that displays food recipes fetched from the Forkify API. The project showcases recipe details, allows users to add recipes to their favorites, and includes routing for different pages.

## Features

- Fetch and display food recipes.
- View detailed information about a specific recipe.
- Add or remove recipes from the favorites list.
- Smooth animations and responsive design.

## Technologies Used

- React
- React Router
- Context API
- CSS Modules

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ayushsaxena0227/FoodWithReact.git
    cd FoodWithReact
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/`
  - `components/`: Contains React components.
    - `Details.jsx`: Displays the details of a specific recipe.
  - `context/`: Contains the global context and provider.
    - `Context.js`: Defines the context and provider for managing global state.
  - `pages/`: Contains page components.
    - `Details.jsx`: The details page component.
    - `styles.css`: Contains the CSS for the details page.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point for the React application.

## Usage

- Navigate to different recipes and view their details.
- Add recipes to your favorites list by clicking the "Add to Favorites" button.
- Remove recipes from your favorites list by clicking the "Remove from Favorites" button.

## API

This project uses the Forkify API to fetch recipe data. For more information about the API, visit the [Forkify API documentation](https://forkify-api.herokuapp.com).

