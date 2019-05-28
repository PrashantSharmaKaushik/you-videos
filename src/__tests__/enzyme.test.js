// setup file
import React from 'react';

import sinon from 'sinon';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test file
import  { shallow }  from 'enzyme';

//Import The Component
import App from "../App";
import VideoList from "../containers";

it("describe test for Videos List", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".div").to.equal(true));
})

it("describe test for Videos List", () => {
    const wrapper = shallow(<VideoList />);
    expect(wrapper.find(".div").to.equal(true));
})

