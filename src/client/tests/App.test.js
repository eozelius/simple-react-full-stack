import React from 'react';
import App from '../App';

describe(App, () => {
  test('it renders properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
