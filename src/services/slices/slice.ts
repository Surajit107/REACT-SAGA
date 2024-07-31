// slice.ts
import { createSlice } from '@reduxjs/toolkit';
import { DataState } from '../../types/types';

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
    type: '',
};

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        fetchDataRequest: (state, { payload, type }) => {
            state.loading = true;
            state.type = type;
        },
        fetchDataSuccess: (state, { payload, type }) => {
            state.loading = false;
            state.type = type;
            state.data = payload.data;
        },
        fetchDataFailure: (state, { payload, type }) => {
            state.loading = false;
            state.type = type;
            state.error = payload;
        },
    },
});

export const {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure
} = ProductSlice.actions;

export default ProductSlice.reducer;
