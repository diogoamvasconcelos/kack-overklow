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

(keep in mind `imports` need a special syntax and add `antd css` to the base `App.tsx`)

