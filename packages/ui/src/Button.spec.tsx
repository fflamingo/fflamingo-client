import { shallow } from "enzyme";
import { Button } from "./Button";
import React from "react";

describe("Button", () => {
  test('should render a type="button" element', () => {
    const wrapper = shallow(<Button onClick={e => {}} text="Hello" />);
    expect(wrapper.find("button").text()).toEqual("Hello");
  });
});
