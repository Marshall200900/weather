import React from "react";
import { shallow } from "enzyme";
import Results from "./results";

describe("Results", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Results />);
    expect(wrapper).toMatchSnapshot();
  });
});
