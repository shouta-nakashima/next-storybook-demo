# nextjsとstorybookのセットアップ

### nextjsのインストール

`npx create-next-app`

### TypeScriptのインストール

`touch tsconfig.json` tsconfigの作成

`npm i --save-dev typescript @types/react @types/node`

### StoryBookのセットアップ

`npx sb init`

# SASSの導入

### install sass

`npm i sass`

### install sass-loader

`npm i --save-dev sass-loader`

### setting preview

```.storybook/main.js

//.storybook/main.js

webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[local]___[hash:base64:2]",
            },
          },
        },
        "sass-loader",
      ],
    });
    return { ...baseConfig };
  },
```

# Tailwind CSSの導入

### install tailwind

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

### Create your configuration files

`npx tailwindcss init -p`

### Configure Tailwind to remove unused styles in production

```tailwind.config.js
// tailwind.config.js
  module.exports = {
  - purge: [],
  + purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

### Include Tailwind in your CSS

```globals.css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### @storybook/addon-postcss の導入

`npm i --save-dev @storybook/addon-postcss`

```.storybook/main.js
// .storybook/main.js
module.exports = {
  addons: [
    // 追加
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
```

### Tailwind CSS のスタイル読み込み

```.storybook/preview.js
// .storybook/preview.js
// 追加
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```

### next/imageを適応できるようにする

```.storybook/preview.js
//追加
import * as Image from 'next/image';

Object.defineProperty(Image, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

```

#### package.jsonを修正
```package.json
 "scripts": {
    "storybook": "start-storybook -s ./public -p 6006",
  },
```
