import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import rootReducer, { RootState } from './reducers';
import { useSelector } from 'react-redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

export const makeConfiguredStore = () => configureStore({ reducer: rootReducer });
export type IMakeConfigStore = ReturnType<typeof makeConfiguredStore>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type Store = ReturnType<typeof makeConfiguredStore>;
export type AppDispatch = Store['dispatch'];
export type AppState = ReturnType<Store['getState']>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const wrapper = createWrapper<Store>(makeConfiguredStore as MakeStore<Store>);
