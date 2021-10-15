import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const loadCrypto = createAsyncThunk('fetchData',
  async () => {
    const result = await fetch('https://api.nomics.com/v1/currencies/ticker?key=d4a4c47a532e48347da5501fd19f66e912b4bc09&gdax&per-page=100&interval=1dgdax&interval=1d&per-page=20', { method: 'GET' });
    const res = await result.json();
    console.log(res);
    return res;
  });

const crypto = createSlice({
  name: 'values',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCrypto.fulfilled, (state, action) => action.payload);
  },
});

const reducer = combineReducers({
  value: crypto.reducer,
});

export { reducer, loadCrypto };
