import React from 'react';
import { render,screen } from '@testing-library/react';
import Spinner from '../src/components/Spinner';
import "@testing-library/jest-dom";
describe('Spinner', () => {
  it('renders the spinner', () => {
    render(<Spinner />);
   
    expect( screen.getByLabelText('blocks-loading')).toBeInTheDocument();
  });
});
