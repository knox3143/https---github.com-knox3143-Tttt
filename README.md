# Funky Music Website

This is the official Next.js website for the Funky Music Discord bot.

## Development

1.  Install dependencies: `npm install`
2.  Run the development server: `npm run dev`

The application will be available at `http://localhost:3000`.

---

## Deployment Instructions

This Next.js project is configured to be easily deployable on a variety of modern hosting platforms.

### Vercel (Recommended)

1.  Fork this repository.
2.  Go to [Vercel](https://vercel.com/new) and import your forked Git repository.
3.  Vercel will automatically detect that it's a Next.js project and configure the build settings.
4.  Click **Deploy**.

Vercel will handle everything from there, including setting environment variables if you add them in the project settings.

### Netlify

1.  Fork this repository.
2.  Go to your Netlify dashboard and click "Add new site" -> "Import an existing project".
3.  Connect to your Git provider and select the repository.
4.  Netlify should automatically detect the settings from `netlify.toml`.
5.  Click **Deploy site**.

### Railway

1.  Fork this repository.
2.  Go to your Railway dashboard and create a new project.
3.  Select "Deploy from GitHub repo" and choose your repository.
4.  Railway will use the `Procfile` to determine how to build and start the application.
5.  Railway will automatically expose the service on a public domain.

### Render

1.  Fork this repository.
2.  Go to your Render dashboard and create a new "Web Service".
3.  Connect your GitHub account and select the repository.
4.  Render will detect it's a Node.js application. Set the following:
    *   **Build Command**: `npm run build`
    *   **Start Command**: `npm run start`
5.  Click **Create Web Service**.

### Docker / Any VPS (Manual Deployment)

This project includes a `Dockerfile` for containerized deployments.

1.  **Build the Docker image:**
    ```bash
    docker build -t funky-music-website .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 3000:3000 funky-music-website
    ```

For a VPS without Docker:

1.  Make sure Node.js (v18 or newer) is installed.
2.  Clone the repository and navigate into the directory.
3.  Install dependencies: `npm install`
4.  Build the application: `npm run build`
5.  Start the application (we recommend using a process manager like `pm2`):
    ```bash
    npm run start
    ```
    The application will run on the port defined by the `PORT` environment variable, or 3000 by default.
