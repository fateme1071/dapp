# cra-structure

This is a simple project structure based on `create-react-app` for Produpt Studio dev team.

## Features

- `404` page
- `500` page made with `react-error-boundary`
- private routes with `react-router` v6
- loading overlay for all pages
- loading state for buttons
- custom `react-query` hooks to separate api files from ui
- `svgr` for using svg icons

## Folder structure

```bash
|__ src
    |__ api         # custom hooks for fetch/change data from api
    |__ assets      # fonts, images, files and raw svg icons
    |__ components  # all components exported from a index.js file
    |__ config      # default axios instance and router's history config
    |__ helpers     # some simple functions to help DRY
    |__ HOC         # higer order components
    |__ hooks       # all custom hooks (except api related)
    |__ pages       # each page in UI
    |__ styles      # pages styles goes here (eg: home.module.css)
```

## Usage

simply clone this repo and run:

```
yarn start
```

then on your browser go to:

```
http://localhost:3000
```

to see homepage.

## FAQ

#### How to add a private route?

go to `src/App.js` and find the Route with `PrivateRoute` element. you can add your private route inside that Route.

#### How to add a new svg icon as React Component?

first download your svg icon from zeplin or any other source. then put it in `src/assets/icons` folder. now open a new command line inside the project folder and run:

```
yarn svgr
```

by doing this, the newly created icon will be in the `src/components/icons` folder. open the new icon with your editor and add some props (className, width, height, color, ...) you can use it like this:

```jsx
import { TrashIcon } from "../components/icons";

const SomePage = () => {
  return <TrashIcon width={16} height={16} color="#e3e3e3" />;
};
```

#### How to change the `500` page UI?

go to `src/components/errorFallback/errorFallback.jsx` and change the component as you like. the `resetErrorBoundary` prop will do a hard reload on the page. if you want to change this behavior go to `src/App.js` file and look at the `return` section.

#### How to use the `Loading` component?

go to `src/pages/home.jsx` to see the example.

## Support

For support, email pediii1373@gmail.com or contact me on whatsapp (+989058239363)
