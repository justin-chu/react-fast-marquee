# React Fast Marquee

[React Fast Marquee](https://website.com) is a lightweight React component that utilizes CSS animations to create smooth marquees.

<!-- [![Build Status](https://travis-ci.org/alampros/react-confetti.svg?branch=master)](https://travis-ci.org/alampros/react-confetti)
[![npm](https://img.shields.io/npm/v/react-confetti.svg)](https://www.npmjs.com/package/react-confetti)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-confetti.svg)](https://bundlephobia.com/result?p=react-confetti)
![npm type definitions](https://img.shields.io/npm/types/react-confetti.svg) -->

<!-- [![demogif][2]][1]

[1]: http://alampros.github.com/react-confetti
[2]: http://alampros.github.io/react-confetti/confetti-demo-anim.gif (demo gif) -->

## Demo

Check out the demo [here](https://website.com) and play around with some sample marquees.

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

To use the component, first import it into your file:

```jsx
import Marquee from "react-fast-marquee";
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```jsx
<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
```

This text should now be sliding to the left.

A sample file might look like:

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

| Property        | Type                        | Default           | Description                                              |
| --------------- | --------------------------- | ----------------- | -------------------------------------------------------- |
| `style`         | `object`                    | `{}`              | Inline style for the container div                       |
| `className`     | `string`                    | `""`              | Class name to style the container div                    |
| `play`          | `boolean`                   | `true`            | Whether to play or pause the marquee                     |
| `pauseOnHover`  | `boolean`                   | `false`           | Whether to pause the marquee when hovered                |
| `pauseOnClick`  | `boolean`                   | `false`           | Whether to pause the marquee when clicked                |
| `direction`     | `"left"` or `"right"`       | `"left"`          | The direction the marquee is sliding                     |
| `speed`         | `number`                    | `20`              | Speed calculated as pixels/second                        |
| `delay`         | `number`                    | `0`               | Duration to delay the animation after render, in seconds |
| `gradient`      | `boolean`                   | `true`            | Whether to show the gradient or not                      |
| `gradientColor` | `Array<number>` of length 3 | `[255, 255, 255]` | The rgb color of the gradient as an array of length 3    |
| `gradientWidth` | `number`                    | `200`             | The width of the gradient on either side, in pixels      |
| `children`      | `ReactNode`                 | `null`            | The children rendered inside the marquee                 |
