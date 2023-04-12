import { createSlice } from '@reduxjs/toolkit';
import {
  getAllItems,
  getUserInfo,
  setUserInfo,
  setAvatar,
  getItem,
  addToBasket,
  getFav,
  deleteFromBasket,
  makeOrder,
  getUsers,
  getOrders,
  addItem,
  buyAll,
  getUserOrders,
  updateStatus,
  cancelOrder,
} from './main-operations';
import { toast } from 'react-toastify';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const mainSlice = createSlice({
  name: 'main',
  initialState: {
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
  },
  extraReducers: {
    [getAllItems.pending]: handlePending,
    [getAllItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.data;
    },
    [getAllItems.rejected]: handleRejected,
    [getUserInfo.pending]: handlePending,
    [getUserInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload.result;
    },
    [getUserInfo.rejected]: handleRejected,
    [setUserInfo.pending]: handlePending,
    [setUserInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload.data;
      toast.success('INFO was edited!', {
        theme: 'colored',
      });
    },
    [setUserInfo.rejected]: handleRejected,

    [setAvatar.pending]: handlePending,
    [setAvatar.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload.data;
    },
    [setAvatar.rejected]: handleRejected,
    [getItem.pending]: handlePending,
    [getItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedItem = action.payload;
    },
    [getItem.rejected]: handleRejected,
    [addToBasket.pending]: handlePending,
    [addToBasket.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      toast('Your item wad added to basket!');
    },
    [addToBasket.rejected](_, action) {
      toast.error('This item was already added to favorites');
    },
    [getFav.pending]: handlePending,
    [getFav.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.fav = action.payload;
    },
    [getFav.rejected]: handleRejected,
    [deleteFromBasket.pending]: handlePending,
    [deleteFromBasket.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.fav = action.payload.all;
    },
    [deleteFromBasket.rejected]: handleRejected,

    [makeOrder.pending]: handlePending,
    [makeOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      toast.success('Your order was successfully made');
      // state.fav = action.payload.fav;
    },
    [makeOrder.rejected]: handleRejected,
    [getUsers.pending]: handlePending,
    [getUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.admins = action.payload.admins;
      state.users = action.payload.users;
    },
    [getUsers.rejected]: handleRejected,

    [getOrders.pending]: handlePending,
    [getOrders.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.orders = action.payload.data;
    },
    [getOrders.rejected]: handleRejected,
    [addItem.pending]: handlePending,
    [addItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      toast.success('Item was added!');
    },
    [addItem.rejected](state, action) {
      toast.error('Item name was duplicfted');
    },
    [buyAll.pending]: handlePending,
    [buyAll.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      toast.success('Your order was successfully made');
    },
    [buyAll.rejected]: handleRejected,

    [getUserOrders.pending]: handlePending,
    [getUserOrders.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload)
      state.userOrders=action.payload
    },
    [getUserOrders.rejected]: handleRejected,

    [updateStatus.pending]: handlePending,
    [updateStatus.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload)
      state.orders=action.payload
      toast.success('Status was successfully changed');
    },
    [updateStatus.rejected]: handleRejected,

    [cancelOrder.pending]: handlePending,
    [cancelOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload,"RES")
      state.userOrders=action.payload
      toast.success('Order was cancelled');
    },
    [cancelOrder.rejected]: handleRejected,
  },
  reducers: {
    clearSelectedItem(state) {
      state.selectedItem = {};
    },
  },
});

export const { clearSelectedItem } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
