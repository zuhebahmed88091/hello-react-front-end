import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const apiUrl = 'http://127.0.0.1:3000/greetings';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async (thunkAPI) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export default fetchGreeting;
