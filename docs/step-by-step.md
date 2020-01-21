# 1 - Set up FE: NPM, Parcel, React, Typescript

Isntall `yarn`: https://yarnpkg.com/lang/en/docs/install/#debian-stable

Based on: https://dev.to/grant_bartlett/getting-started-with-react-typescript-and-parcel-1ocb

```
yarn add react react-dom react-router-dom

yarn add @types/react @types/react-dom @types/react-router-dom --dev
```

```
yarn add parcel-bundler typescript --dev

```

## Config Typescript

run `tsc --init` to create a `tsconfig.json`
edit the following:

- add: "jsx": "react"
- add: "moduleResolution": "node"
  etc... (mostly was based on Martins Bohgard's file)

## Add .gitignore

copy one form internets about typescript/react/webapp

## Add tslint and prettier

```
yarn add tslint prettier --dev

```

- add a `tslint.json` (based on Martin's) or run `tslint --init`
- install prettier plugin on vscode
- add a `.prettierignore` similar to the `.gitignore`

## Install ant design library

https://ant.design/docs/react/use-in-typescript

```
yarn add antd
```

The out of the box way to work with `antd` is not the easiest for imports.

- `@import "antd/dist/antd.css";` in App.tsx to load the css
- `import Layout from "antd/es/layout"; const { Footer } = Layout;` to import a Footer

Use instead the `babel-plugin-import` to make it easier: https://github.com/ant-design/babel-plugin-import

```
yarn add babel-plugin-import --dev
```

and setup the .babelrc following: https://github.com/ant-design/parcel-antd

## Add redux

- nice tutorials: https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG
- and: https://redux.js.org/recipes/usage-with-typescript/

```
yarn add redux react-redux
yarn add @types/react-redux --ddev
```

- to enable redux-devtools (browser) follow this: https://github.com/zalmoxisus/redux-devtools-extension#usage

```
yarn add redux-devtools-extension
```

## Add async/await support

- it doesnt work out of the box: https://github.com/parcel-bundler/parcel/issues/2442
- use the `https://babeljs.io/docs/en/babel-plugin-transform-runtime`

```
yarn add @babel/plugin-transform-runtime --dev
yarn add @babel/runtime
```

## Add redux-thunk

- Async actions - http requests
- https://github.com/reduxjs/redux-thunk and https://redux.js.org/recipes/usage-with-typescript/
- quick tut: https://www.youtube.com/watch?v=apg98RIJfJo&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=14

```
yarn add redux-thunk
```

## HTTP Client

- Using `fetch` - easier solution than the bloated clients like `axios` etc...

## Mock server

- Local `nodejs` with `express`
- https://github.com/TypeStrong/ts-node
- https://github.com/expressjs/express

- guide: https://developer.okta.com/blog/2018/11/15/node-express-typescript

```
yarn add ts-node express @types/node @types/express --dev
```

- Write a mock server script with express
- Add a script to `package.json` to run it with ts-node: `yarn ts-node ./mock-be/index.ts`

- add express `cors` middleware to enable all cors requests

```
yarn add cors --dev
```
