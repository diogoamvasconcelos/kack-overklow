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
