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

- add `tslint.json`
