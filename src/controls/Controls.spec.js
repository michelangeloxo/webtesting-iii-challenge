import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from '../controls/Controls';


afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
    it('open and unlocked', () => {
        const Michael = render(<Controls closed={false} locked={false}/>);
        const closeBtn = Michael.getByText(/close gate/i);
        const lockBtn = Michael.getByText(/lock gate/i); 
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeTruthy();
    })
});