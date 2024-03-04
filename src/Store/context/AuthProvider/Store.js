import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './Reducers';


export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    },
});