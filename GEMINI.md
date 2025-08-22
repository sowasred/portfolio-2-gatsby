# About This Project

This is a personal portfolio website for Ozan Muldur, built with Gatsby.js. It showcases projects, hosts blog posts, and provides information about his professional background.

The main goal is the ongoing development and maintenance of this portfolio site.

# Tech Stack

-   **Framework**: Gatsby.js
-   **Language**: JavaScript
-   **UI Library**: React
-   **Styling**: Plain CSS / CSS Modules
-   **Content**: Markdown for blog posts
-   **Package Manager**: npm

# Key Commands

-   `npm install`: Installs all project dependencies.
-   `npm start` or `npm run develop`: Starts the local development server with hot-reloading.
-   `npm run build`: Compiles the application for production.
-   `npm run serve`: Serves the production build locally for testing.
-   `npm run clean`: Clears the Gatsby cache and public directory.
-   `npm run format`: Formats all code using Prettier.

# Project Structure & Conventions

-   **Pages**: Static pages are created as React components in the `src/pages/` directory.
-   **Components**: Reusable React components are located in `src/components/`.
-   **Blog**: Blog posts are written in Markdown (`.md`) files and stored in `src/blogs/`. Gatsby's `gatsby-transformer-remark` plugin and the `src/templates/blogTemplate.js` file programmatically convert these into blog post pages.
-   **Data**: Static data for components (like project details and testimonials) is stored in `src/constants/`.
-   **Images**: Static images used throughout the site are in `src/images/`.
