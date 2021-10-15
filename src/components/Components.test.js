import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Links from './Links';
import store from '../redux/configureStore';

describe('Homepage tests', () => {
  test('Header display', async () => {
    render(<Provider store={store}><Links /></Provider>);
    expect(await screen.queryByText(/TOP 100/)).toBeInTheDocument();
  });
  test('Header display', async () => {
    render(<Provider store={store}><Links /></Provider>);
    expect(await screen.queryByText(/Search by name/)).toBeInTheDocument();
  });
});
