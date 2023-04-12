import { register ,logOut,logIn,refreshUser} from './auth-operations';
import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null,role:null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log("action.payload",action.payload)
        console.log("state.user",action.payload.user)
        console.log("action.payload.token",action.payload.token)
  
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state,action) => {
        console.log("action.payload",action.payload)
        
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log(state)
        toast.success("You successfully loged in", {
          theme: "colored"
        })
      })
      .addCase(refreshUser.pending,state=>{
        state.isRefreshing=true
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      
      
  },
});
export const authReducer = authSlice.reducer;