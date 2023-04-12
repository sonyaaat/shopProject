import axios from "axios";
import {  toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://localhost:3000/api/';
const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };
  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        console.log(credentials)
        const responce = await axios.post('/auth/register', credentials);
        console.log(responce)
        token.set(responce.data.token)
        return responce.data;
      } catch (error) {
        console.log("error",error.response.data.message)
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/auth/login', credentials);
        token.set(res.data.token);
        return res.data;
      } catch (error) {
        toast.error(error.response.data.message)
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
    try {
      await axios.get('/auth/logout');
      token.unset()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        token.set(persistedToken);
        const res = await axios.get('/users/currentUser');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );