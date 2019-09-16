import React from 'react';
import Display from '../display/Display';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
});