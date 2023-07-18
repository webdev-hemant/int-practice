import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  apiCardData: {},
};

const homeReducer = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    demoActionHome: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        // @ts-ignore: payload dont have any type
        ...action.payload.homeReducer,
      };
    });
  },
});
export const { demoActionHome } = homeReducer.actions;

export default homeReducer.reducer;
