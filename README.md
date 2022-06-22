# trips-challenge

A simple Next.js (sorry Gatsby, not this time) site with Chakra UI components.
To present the example, I used mock data from the json file and client side rendering (so insteat of SSG/SSR, this is a typical SPA application).

## Installation & development

Before you start, you have to install all dependencies with yarn command:
```sh
yarn
```

Tu run dev environment just run:
```sh
yarn dev
```

To run e2e test, first you have to run dev server and in the other terminal run:
```sh
yarn test:e2e
```

To build production version you have to create `.env.local` file and specify `API_URL` variable with correct API url. After that you can run:
```sh
yarn build
```

## Tech

Libraries used to create the task:

* [Next.js](https://nextjs.org/) - as a foundation, because it has own, internal server
* [ChakraUI](https://chakra-ui.com/) - main UI library, it integrates perfectly with React and supports accessibility
* [Playwright](https://playwright.dev/) - for easy e2e test
* [date-fns](https://date-fns.org/) - for date subtraction
* [react-simple-star-rating](https://github.com/awran5/react-simple-star-rating) - for star rating component
* [swr](https://swr.vercel.app/) - for fetching the data from internal server

