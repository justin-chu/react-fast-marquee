import React from "react";
import { shallow, mount } from "enzyme";
import Marquee from "../src/components/Marquee";
import ReactDOM from "react-dom";

class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
}

describe("Marquee", () => {
  window.ResizeObserver = ResizeObserver;

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Marquee>
        <div>testing</div>
      </Marquee>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("shallow renders without crashing", () => {
    let component = shallow(
      <Marquee>
        <div>testing</div>
      </Marquee>
    );
    expect(component.length).toBe(1);
  });

  test("should be paused", () => {
    let component = mount(
      <Marquee play={false}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().play).toBe(false);
  });

  test("should pause when hovered", () => {
    let component = mount(
      <Marquee pauseOnHover={true}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().pauseOnHover).toBe(true);
  });

  test("should pause when clicked", () => {
    let component = mount(
      <Marquee pauseOnClick={true}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().pauseOnClick).toBe(true);
  });

  test("should change direction", () => {
    let component = mount(
      <Marquee direction="right">
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().direction).toBe("right");
  });

  test("should change speed", () => {
    let component = mount(
      <Marquee speed={100}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().speed).toBe(100);
  });

  test("should change delay", () => {
    let component = mount(
      <Marquee delay={100}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().delay).toBe(100);
  });

  test("should disable gradient", () => {
    let component = mount(
      <Marquee gradient={false}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().gradient).toBe(false);
  });

  test("should change gradient color", () => {
    let component = mount(
      <Marquee gradientColor={[0, 0, 0]}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().gradientColor).toStrictEqual([0, 0, 0]);
  });

  test("should change gradient width", () => {
    let component = mount(
      <Marquee gradientWidth={100}>
        <div>testing</div>
      </Marquee>
    );
    expect(component.props().gradientWidth).toBe(100);
  });

  test("should have a callback if passed", () => {
    const component = mount(
      <Marquee onMount={() => {}}>
        <div>testing</div>
      </Marquee>
    );
    expect(typeof component.props().onMount).toBe("function");
  });

  test("should call its onMount callback after mounting if it exists and is a function", () => {
    const arr = [];
    const runAfterMounting = () => {
      arr.push(1, 2, 3);
    };
    mount(
      <Marquee onMount={runAfterMounting}>
        <div>testing</div>
      </Marquee>
    );
    expect(arr.length).toBe(3);
  });
});
