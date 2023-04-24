import { mainReducer, clearSelectedItem } from '../src/redux/main/mainSlice';
import React from 'react';

import "@testing-library/jest-dom";
describe('mainSlice reducer', () => {
  const initialState = {
    items: [],
    isLoading: false,
    error: null,
    userInfo: {},
    selectedItem: {},
    fav: {},
    users: {},
    admins: {},
    orders: {},
    userOrders:{}
  };

  it('should handle initial state', () => {
    expect(mainReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle clearSelectedItem', () => {
    const actual = mainReducer({ selectedItem: { id: 1 } }, clearSelectedItem());
    expect(actual.selectedItem).toEqual({});
  });

  it('should handle getAllItems.pending', () => {
    const actual = mainReducer(initialState, { type: 'getAllItems/pending' });
    expect(actual.isLoading).toBe(false);
  });

  it('should handle getAllItems.fulfilled', () => {
    const payload = { data: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }] };
    const actual = mainReducer(initialState, { type: 'getAllItems/fulfilled', payload });
    expect(actual.isLoading).toBe(false);
    expect(actual.error).toBeNull();
    expect(actual.items).toEqual([]);
  });

  it('should handle getAllItems.rejected', () => {
    const payload = 'error';
    const actual = mainReducer(initialState, { type: 'getAllItems/rejected', payload });
    expect(actual.isLoading).toBe(false);
    expect(actual.error).toBe(null);
  });
});
