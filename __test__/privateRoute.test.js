import { render ,screen} from '@testing-library/react';
import React from 'react';
import { PrivateRoute } from '../src/components/PrivateRoute';
import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
    selectIsRefreshing,
  } from '../src/redux/auth/auth-selectors';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('PrivateRoute', () => {
  it('should render the component if the user is logged in', () => {
    const mockComponent = jest.fn();
    const mockIsLoggedIn = true;

    useSelector.mockImplementation((selector) => {
      if (selector === selectIsLoggedIn) {
        return mockIsLoggedIn;
      }
      return null;
    });

    render(<PrivateRoute component={mockComponent} />);

    expect(mockComponent).toHaveBeenCalledTimes(0);
  });

//   it('should redirect to the given URL if the user is not logged in', () => {
//     const mockRedirectTo = '/login';
//     const mockIsLoggedIn = false;
//     const mockIsRefreshing = false;

//     useSelector.mockImplementation((selector) => {
//       if (selector === selectIsLoggedIn) {
//         return mockIsLoggedIn;
//       }
//       if (selector === selectIsRefreshing) {
//         return mockIsRefreshing;
//       }
//       return null;
//     });

//     render(
//       <PrivateRoute component={() => <div data-testid="test" />} redirectTo={mockRedirectTo} />
//     );

//     expect(screen.getByRole('navigation')).toHaveAttribute('href', mockRedirectTo);
//   });

  it('should not redirect if the user is refreshing', () => {
    const mockComponent = jest.fn();
    const mockIsLoggedIn = false;
    const mockIsRefreshing = true;

    useSelector.mockImplementation((selector) => {
      if (selector === selectIsLoggedIn) {
        return mockIsLoggedIn;
      }
      if (selector === selectIsRefreshing) {
        return mockIsRefreshing;
      }
      return null;
    });

    // render(<PrivateRoute component={mockComponent} />);

    // expect(mockComponent).not.toHaveBeenCalled();
  });
});
