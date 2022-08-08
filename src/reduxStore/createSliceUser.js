import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {

      state.email =action.payload
    
    },
    logout: (state) => {
        state.user =null;
    },
   
}})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer