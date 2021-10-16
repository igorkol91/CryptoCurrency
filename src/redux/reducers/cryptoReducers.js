import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const loadCrypto = createAsyncThunk('fetchData',
  async () => {
    const result = await fetch('https://api.nomics.com/v1/currencies/ticker?key=d4a4c47a532e48347da5501fd19f66e912b4bc09&gdax&per-page=100&interval=1dgdax&interval=1d&per-page=20', { method: 'GET', mode: 'cors', headers });
    const res = await result.json();
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
