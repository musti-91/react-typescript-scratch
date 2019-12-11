import * as React from "react";
import { shallow } from "enzyme";

import Button from "./Button";
describe("Button Component", () => {
  test("should match snapshot", () => {
    expect.assertions(1);

    const wrapper = shallow(<Button title={"MY BUTTON"} onClick={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });
});
