import React from 'react';
import Display from '../display/Display';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('open and unlock', () => {
      const display = render(<Display closed={false} locked={false} />);
      const unlocked = display.getByText(/unlock/i);
      const open = display.getByText(/open/i);
      display.queryByText(/closed/i);
      expect(unlocked).toHaveClass('green-led');
      expect(open).toHaveClass('green-led');

    });
});