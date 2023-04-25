# React Fast Marquee

[React Fast Marquee](https://www.react-fast-marquee.com) is a lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.

[![npm](https://img.shields.io/npm/v/react-fast-marquee.svg)](https://www.npmjs.com/package/react-fast-marquee)
[![npm downloads](https://img.shields.io/npm/dt/react-fast-marquee.svg)](https://www.npmjs.com/package/react-fast-marquee)
[![justin-chu](https://circleci.com/gh/justin-chu/react-fast-marquee.svg?style=svg)](https://circleci.com/gh/justin-chu/react-fast-marquee)
[![codecov](https://codecov.io/gh/justin-chu/react-fast-marquee/branch/master/graph/badge.svg?token=52Q4YZYFME)](https://codecov.io/gh/justin-chu/react-fast-marquee)
[![npm license](https://img.shields.io/npm/l/react-fast-marquee.svg)](https://www.npmjs.com/package/react-fast-marquee)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-fast-marquee.svg)](https://bundlephobia.com/result?p=react-fast-marquee)
[![npm type definitions](https://img.shields.io/npm/types/react-fast-marquee.svg)](https://www.npmjs.com/package/react-fast-marquee)

[![demogif][2]][1]

[1]: https://www.react-fast-marquee.com
[2]: https://media.giphy.com/media/6ritiN2cpvpsyz4fo6/giphy.gif "demo gif"

## Demo

Check out the demo [here](https://www.react-fast-marquee.com) and play around with some sample marquees.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-fast-marquee --save
```

If you're using `yarn`, run:

```sh
yarn add react-fast-marquee
```

## Usage

To use the component, first import `Marquee` into your file:

```jsx
import Marquee from "react-fast-marquee";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```jsx
<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
```

A sample file might look like this:

```jsx
import React from "react";
import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;
```

## Props

| Property          | Type                                | Default           | Description                                                                                                                                                                                          |
| :---------------- | :---------------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style`           | `CSSProperties`                     | `{}`              | Inline style for the container div                                                                                                                                                                   |
| `className`       | `string`                            | `""`              | Name of the css class to style the container div                                                                                                                                                     |
| `autoFill`        | `boolean`                           | `false`           | Whether to automatically fill blank space in the marquee with copies of the children or not                                                                                                          |
| `play`            | `boolean`                           | `true`            | Whether to play or pause the marquee                                                                                                                                                                 |
| `pauseOnHover`    | `boolean`                           | `false`           | Whether to pause the marquee when hovered                                                                                                                                                            |
| `pauseOnClick`    | `boolean`                           | `false`           | Whether to pause the marquee when clicked                                                                                                                                                            |
| `direction`       | `"left" \| "right"\| "up"\| "down"` | `"left"`          | The direction the marquee slides <br /><br /> **Warning:** Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them |
| `speed`           | `number`                            | `50`              | Speed calculated as pixels/second                                                                                                                                                                    |
| `delay`           | `number`                            | `0`               | Duration to delay the animation after render, in seconds                                                                                                                                             |
| `loop`            | `number`                            | `0`               | The number of times the marquee should loop, 0 is equivalent to infinite                                                                                                                             |
| `gradient`        | `boolean`                           | `false`           | Whether to show the gradient or not                                                                                                                                                                  |
| `gradientColor`   | `Array<number>` of length 3         | `[255, 255, 255]` | The rgb color of the gradient as an array of length 3                                                                                                                                                |
| `gradientWidth`   | `number \| string`                  | `200`             | The width of the gradient on either side                                                                                                                                                             |
| `onFinish`        | `{() => void}`                      | `null`            | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.                                                                                                        |
| `onCycleComplete` | `{() => void}`                      | `null`            | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).                                                                                  |
| `children`        | `ReactNode`                         | `null`            | The children rendered inside the marquee                                                                                                                                                             |
