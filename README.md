## Linky

### About
Linky is a URL shortening service and a link management application. Linky uses HTTP 301 
redirects for its links. The shortcuts are intended to be permanent and cannot be changed 
once they are created. Application provides comprehensive metrics on every link — like 
clicks, geographic data, and top referring channels.

### Demo
http://64.225.70.93/
 
### Development 

#### Technology
Linky designed as regular SPA based on MERN stack (MongoDb, Express, React, NodeJs).

#### Running locally

- Make sure you have running MongoDb instance.

For both `web` and `backend` folders:
- Install dependencies with `npm install`.
- Create `.env` file based on `.env.sample`.
- Start module via `npm start`.

#### Production deployment with Docker

#### `docker-compose up`

#### Frontend scripts

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run storybook`

Starts Storybook on a random open port in dev-mode.

#### `npm run snapshot`

Snapshot testing. This will run Storybook's build-storybook command to create a static site from your storybook, 
and will upload your stories to Percy to generate screenshots from them.

Note: Perci app token should be provided first in environment e.g. `export PERCY_TOKEN=<your token here>`

#### Code conventions

All sources autoformatted with [Prettier](https://prettier.io/). Make sure you have Prettier 
[installed](https://prettier.io/docs/en/install.html) locally and setup file watchers in your IDE.
