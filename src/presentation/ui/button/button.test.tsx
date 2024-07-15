import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Button } from '.';

describe('<Button />', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Button label="Press Me" onPress={() => {}} />);
    const buttonElement = getByText('Press Me');
    expect(buttonElement).toBeTruthy();
  });

  test('triggers onPress event', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button label="Press Me" onPress={onPressMock} />);
    const buttonElement = getByText('Press Me');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
