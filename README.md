# cra-structure

This is a simple project structure based on create-react-app for Produpt Studio dev team.

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

clone this repo and run `yarn start`
