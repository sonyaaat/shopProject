import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/api/';
export const getAllItems = createAsyncThunk(
    'main/getAllItems',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/admin/items');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const getUserInfo = createAsyncThunk(
    'main/getUserInfo',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/users/userInfo');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const setUserInfo = createAsyncThunk(
    'main/setUserInfo',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/edit',credentials);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const setAvatar = createAsyncThunk(
    'main/setAvatar',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post('/users/avatar',credentials);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const getItem = createAsyncThunk(
    'main/getItem',
    async (credentials, thunkAPI) => {
      try {
        const {id}=credentials
        const response = await axios.get(`/user/items/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const addToBasket = createAsyncThunk(
    'main/addToBasket',
    async (credentials, thunkAPI) => {
      try {
        const {id}=credentials
        console.log("I",id)
        const response = await axios.post(`/user/items/addToFavorite/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const getFav = createAsyncThunk(
    'main/getFav',
    async (_, thunkAPI) => {
      try {

        
        const response = await axios.get(`/user/items/getFav`);
        return response.data.items;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const deleteFromBasket = createAsyncThunk(
    'main/deleteFav',
    async (credentials, thunkAPI) => {
      try {
        const {id}=credentials
        
        const response = await axios.post(`user/items/removeFromFavorite/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const makeOrder = createAsyncThunk(
    'main/makeOrder',
    async (credentials, thunkAPI) => {
      try {

        
        const response = await axios.post(`/order`,credentials);
        return response.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const buyAll = createAsyncThunk(
    'main/buyAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.post(`/order/all`);
        return response.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const getUsers = createAsyncThunk(
    'main/getUsers',
    async (_, thunkAPI) => {
      try {

        
        const response = await axios.get(`/users`);
        return response.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const getOrders = createAsyncThunk(
    'main/getOrders',
    async (_, thunkAPI) => {
      try {

        
        const response = await axios.get(`/order`);
        return response.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const addItem = createAsyncThunk(
    'main/addItem',
    async (credentials, thunkAPI) => {
      try {

        
        const response = await axios.post(`/admin/items`,credentials);
        return response.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const getUserOrders = createAsyncThunk(
    'main/userOrders',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`/order/byUser`);
        return response.data.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const updateStatus = createAsyncThunk(
    'main/updateStatus',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post(`/order/updateStatus`,credentials);
        return response.data.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const cancelOrder = createAsyncThunk(
    'main/cancelOrder',
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post(`/order/cancel`,credentials);
        return response.data.data;
      } catch (e) {
        
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );